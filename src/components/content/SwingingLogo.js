import React from 'react';
import ReactDOM from 'react-dom';

import styles from './SwingingLogo.css';
import largeLogo from '../../assets/img/homepage-logo-large.png';
import offLamp from '../../assets/img/logo-lamp-off-large.png';
import onLamp from '../../assets/img/logo-lamp-on-large.png';
import logoWithoutLamp from '../../assets/img/logo-without-lamp.png';

class SwingingLogo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            overlay: true,
        };
    }

    componentDidMount() {
        var that = this;

        function PendulumSim(length_m, gravity_mps2, initialAngle_rad, timestep_ms, callback) {
            var stops = [-60, 50, -40, 30, -20, 10, 5, 0];
          var velocity = 0;
          var angle = initialAngle_rad;
          var k = -gravity_mps2/length_m;
          var timestep_s = timestep_ms / 1000;
          var zeroCount = 0;
          var lightOn = false;
          var refreshIntervalId = setInterval(function () {

            var acceleration = k * Math.sin(angle);
            velocity += acceleration * timestep_s;
            angle    += velocity     * timestep_s;
            var degrees = angle * 180 / Math.PI;
            degrees = Math.round(degrees % 360);
            if (degrees == stops[0]) {
                if (stops[0] === -20) {
                    lightOn = true;
                }
                if (stops[0] === 0) {
                    zeroCount++;
                } else {
                    velocity = velocity * 0.7;
                    stops.shift();
                }
                if (zeroCount > 5) {
                    var canvas = document.getElementById('canvas');
                    var context = canvas.getContext('2d');
                    var imgLetters = new Image();
                    imgLetters.src = logoWithoutLamp;
                    imgLetters.onload = () => {
                        context.drawImage(imgLetters, 100, 180, 357, 100);
                        that.setState({ overlay: false })
                    };
                    clearInterval(refreshIntervalId);
                }
            }
            callback(angle, lightOn);
          }, timestep_ms);
          return refreshIntervalId;
        }

        var canvas = document.getElementById('canvas');
        var context = canvas.getContext('2d');

        var img = new Image();
        img.src = offLamp;
        var prev=0;
        var sim = PendulumSim(2, 7, Math.PI*70/100, 10, function (angle, lightOn) {


          var rPend = 150;
          var rBall = 80;
          var rBar = Math.min(canvas.width, canvas.height) * 0.005;
          var ballX = Math.sin(angle) * rPend;
          var ballY = Math.cos(angle) * rPend;

          context.fillStyle = "rgba(255,255,255,0.51)";
          context.globalCompositeOperation = "destination-out";
          context.fillRect(0, 0, canvas.width, canvas.height);


          context.globalCompositeOperation = "source-over";

          context.save();
          context.beginPath();
          context.strokeStyle = "#838586";
          context.lineWidth = 2;
          context.moveTo(canvas.width/2, 0);
          context.lineTo(-ballX + canvas.width/2, ballY);
          context.closePath();
          context.stroke();

            context.translate(canvas.width/2, 0);
            context.rotate(angle);

            if (lightOn && img.src != onLamp) {
                img.src = onLamp;
                var elements = document.getElementsByClassName('unblur');
                if (elements.length == 0) {
                    var elements = document.getElementsByClassName('blurred');
                    for (var i = 0; i < elements.length; i++) {
                        elements[i].className += ' unblur';
                    }
                    var elements = document.getElementsByClassName('blurred_before');
                    for (var i = 0; i < elements.length; i++) {
                        elements[i].className += ' unblur';
                    }
                    var elements = document.getElementsByClassName(styles.overlay);
                    for (var i = 0; i < elements.length; i++) {
                        elements[i].className += ' fade-overlay';
                    }
                }
            }
            context.drawImage(img, -60, rPend, 120, 143);

          context.restore();
          prev=angle;
        });
    }

    render() {
        return (
            <div>
                {(this.state.overlay) && <div className={styles.overlay} />}
                <canvas className={styles.canvas} width="700" height="300" id="canvas">
                    <div className={styles.largeLogo}>
                        <img src={largeLogo} alt="LuceoLab" />
                    </div>
                </canvas>
            </div>
        );
    }
}

export default SwingingLogo;
