import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

import styles from './SwingingLogo.css';
import largeLogo from '../../assets/img/homepage-logo-large.png';
import offLamp from '../../assets/img/logo-lamp-off-large.png';
import onLamp from '../../assets/img/logo-lamp-on-large.png';
import logoWithoutLamp from '../../assets/img/logo-without-lamp.png';

let animationTimeout = null;
const maxCanvasWidth = 700;
const maxCanvasHeight = 300;

class SwingingLogo extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            overlay: true,
            fade: false,
            isAnimation: props.animation,
            canvasWidth: maxCanvasWidth,
            canvasHeight: maxCanvasHeight,
        };
    }

    componentWillReceiveProps( nextProps ) {
        if ( this.props.animation && !nextProps.animation ) {
            clearInterval( animationTimeout );
            this.setState({
                overlay: false,
            });
            nextProps.onCancelAnimation();

            setTimeout(() => {
                let canvas = document.getElementById( 'canvas' );
                let context = canvas.getContext( '2d' );

                var imgSymbols = new Image();
                imgSymbols.src = logoWithoutLamp;
                imgSymbols.onload = () => {
                    context.drawImage( imgSymbols, 100, 180, 357, 100 );
                };

                context.beginPath();
                context.strokeStyle = '#838586';
                context.lineWidth = 2;
                context.moveTo( canvas.width / 2, 0 );
                context.lineTo( 350, 150 );
                context.closePath();
                context.stroke();

                var img = new Image();
                img.src = onLamp;
                img.onload = () => {
                    context.drawImage( img, 290, 150, 120, 143 );
                };
            }, 500 );
        }
    }

    componentDidMount() {
        var that = this;

        let height = maxCanvasHeight;
        let width = document.getElementById( 'root' ).clientWidth - 30;
        width = Math.min( width, maxCanvasWidth );
        let coefficient = width / maxCanvasWidth;
        if ( coefficient != 1 ) {
            coefficient *= 1.5;
        }
        this.setState({
            canvasWidth: width,
            canvasHeight: height * coefficient,
        });

        animationTimeout = setTimeout(() => {

            let canvas = document.getElementById( 'canvas' );
            let context = canvas.getContext( '2d' );

            function PendulumSim( length_m, gravity_mps2, initialAngle_rad, timestep_ms, callback ) {
                var stops = [ -60, 40, -30, 0 ];
                var velocity = 0;
                var angle = initialAngle_rad;
                var k = -gravity_mps2 / length_m;
                var timestep_s = timestep_ms / 1000;
                var zeroCount = 0;
                var lightOn = false;
                var refreshIntervalId = setInterval( function() {
                    var acceleration = k * Math.sin( angle );
                    velocity += acceleration * timestep_s;
                    angle += velocity * timestep_s;
                    var degrees = angle * 180 / Math.PI;
                    degrees = Math.round( degrees % 360 );
                    if ( degrees == stops[ 0 ]) {
                        if ( stops[ 0 ] === 40 ) {
                            lightOn = true;
                        }
                        if ( stops[ 0 ] === 0 ) {
                            zeroCount++;
                        } else {
                            velocity = velocity * 0.6;
                            stops.shift();
                        }
                        if ( zeroCount > 2 ) {
                            var imgLetters = new Image();
                            imgLetters.src = logoWithoutLamp;
                            imgLetters.onload = () => {
                                if ( coefficient == 1 ) {
                                    context.drawImage(
                                        imgLetters,
                                        100,
                                        180,
                                        357,
                                        100
                                    );
                                } else {
                                    context.drawImage(
                                        imgLetters,
                                        0,
                                        canvas.height - canvas.width * 0.269 - 20,
                                        canvas.width,
                                        canvas.width * 0.269
                                    );
                                }
                                that.setState({ overlay: false });
                            };
                            clearInterval( refreshIntervalId );
                        }
                    }
                    callback( angle, lightOn );
                }, 16 );
                return refreshIntervalId;
            }



            var img = new Image();
            img.src = offLamp;
            var prev = 0;
            var sim = PendulumSim( 2, 5, Math.PI * 70 / 100, 10, function( angle, lightOn ) {

                if ( coefficient == 1 ) {
                    var rPend = canvas.height / 2;
                } else {
                    var rPend = canvas.height / 2 - 20;
                }

                var rBall = 80;
                var rBar = Math.min( canvas.width, canvas.height ) * 0.005;
                var ballX = Math.sin( angle ) * rPend;
                var ballY = Math.cos( angle ) * rPend;

                context.fillStyle = 'rgba(255,255,255,0.51)';
                context.globalCompositeOperation = 'destination-out';
                context.fillRect( 0, 0, canvas.width, canvas.height );


                context.globalCompositeOperation = 'source-over';

                context.save();
                context.beginPath();
                context.strokeStyle = '#838586';
                context.lineWidth = 2;
                if ( coefficient == 1 ) {
                    context.moveTo( canvas.width / 2, 0 );
                    context.lineTo( -ballX + canvas.width / 2, ballY );
                } else {
                    context.moveTo( canvas.width * 0.699, 0 );
                    context.lineTo( -ballX + canvas.width * 0.699, ballY );
                }
                context.closePath();
                context.stroke();

                if ( coefficient == 1 ) {
                    context.translate( canvas.width / 2, 0 );
                } else {
                    context.translate( canvas.width * 0.699, 0 );
                }

                context.rotate( angle );

                if ( lightOn && img.src.indexOf( onLamp ) == -1 ) {
                    img.src = onLamp;
                    that.props.onEnd();
                    that.setState({ fade: true });
                }

                if ( coefficient == 1 ) {
                    context.drawImage(
                        img,
                        -60,
                        rPend,
                        120,
                        143
                    );
                } else {
                    context.drawImage(
                        img,
                        -canvas.width * 0.314 / 2,
                        rPend,
                        canvas.width * 0.314,
                        canvas.width * 0.314 * 1.196
                    );
                }

                context.restore();
                prev = angle;
            });
        }, 1000 );
    }

    render() {
        const { canvasWidth, canvasHeight } = this.state;
        return (
            <div style={{ display: 'flex' }}>
                <canvas id="canvas" className={styles.canvas} width={canvasWidth} height={canvasHeight} />
                {( this.state.overlay ) && <div className={classNames( 'overlay', { fade: this.state.fade })} />}
            </div>
        );
    }
}

export default SwingingLogo;
