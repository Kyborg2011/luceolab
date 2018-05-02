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

var Animation = function( canvasId ) {
    this.canvas = document.getElementById( canvasId );
    this.context = this.canvas.getContext( '2d' );

    /* Start point */
    this.t = 3000;
    this.timeInterval = 0;
    this.startTime = 0;
    this.lastTime = 0;
    this.frame = 0;
    this.animating = false;

    window.requestAnimFrame = ( function( callback ) {
        return window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      function( callback ) {
          window.setTimeout( callback, 1000 / 60 );
      };
    })();
};

Animation.prototype.getContext = function() {
    return this.context;
};

Animation.prototype.getCanvas = function() {
    return this.canvas;
};

Animation.prototype.clear = function() {
    this.context.clearRect( 0, 0, this.canvas.width, this.canvas.height );
};

Animation.prototype.setStage = function( func ) {
    this.stage = func;
};

Animation.prototype.isAnimating = function() {
    return this.animating;
};

Animation.prototype.getFrame = function() {
    return this.frame;
};

Animation.prototype.start = function() {
    this.animating = true;
    var date = new Date();
    this.startTime = date.getTime();
    this.lastTime = this.startTime;

    if ( this.stage !== undefined ) {
        this.stage();
    }

    this.animationLoop();
};

Animation.prototype.stop = function() {
    this.animating = false;
};

Animation.prototype.getTimeInterval = function() {
    return this.timeInterval;
};

Animation.prototype.getTime = function() {
    return this.t;
};

Animation.prototype.getFps = function() {
    return this.timeInterval > 0 ? 1000 / this.timeInterval : 0;
};

Animation.prototype.animationLoop = function() {
    var that = this;

    this.frame++;
    var date = new Date();
    var thisTime = date.getTime();
    this.timeInterval = thisTime - this.lastTime;
    this.t += this.timeInterval;
    this.lastTime = thisTime;

    if ( this.stage !== undefined ) {
        this.stage();
    }

    if ( this.animating ) {
        window.requestAnimFrame( function() {
            that.animationLoop();
        });
    }
};

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

        if ( width !== maxCanvasWidth ) {
            width = 290;
            height = document.getElementById( 'root' ).clientHeight * 0.4;
        }

        this.setState({
            canvasWidth: width,
            canvasHeight: height,
        });

        let canvas = document.getElementById( 'canvas' );
        let context = canvas.getContext( '2d' );
        const canvasWidth = width;
        const canvasHeight = height;

        function PendulumSim( length_m, gravity_mps2, initialAngle_rad, timestep_ms, callback ) {
            var stops = [ -60, 40, -30, 0 ];
            var velocity = 0;
            var angle = initialAngle_rad;
            var k = -gravity_mps2 / length_m;
            var timestep_s = timestep_ms / 1000;
            var zeroCount = 0;
            var lightOn = false;

            var func = function() {
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
                            if ( width === maxCanvasWidth ) {
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
                                    canvasHeight - canvasWidth * 0.269 - 20,
                                    canvasWidth,
                                    canvasWidth * 0.269
                                );
                            }
                            that.setState({ overlay: false });
                        };
                        clearInterval( refreshIntervalId );
                    }
                }
                window.requestAnimFrame( function() {
                    callback( angle, lightOn );
                });
            };

            window.requestAnimFrame = ( function( func ) {
                return window.requestAnimationFrame ||
              window.webkitRequestAnimationFrame ||
              function( func ) {
                  func();
              };
            })();

            var refreshIntervalId = setInterval(() => {
                window.requestAnimFrame( function() {
                    func();
                });
            }, 10 );

            return refreshIntervalId;
        }

        var img = new Image();
        img.src = offLamp;
        var img2 = new Image();
        img2.src = onLamp;
        var prev = 0;
        let render = function( angle, lightOn ) {
            if ( width == maxCanvasWidth ) {
                var rPend = canvasHeight / 2;
            } else {
                var rPend = canvasHeight - canvasWidth * 0.3  - 30;
            }

            var rBall = 80;
            var rBar = Math.min( canvasWidth, canvasHeight ) * 0.005;
            var ballX = Math.sin( angle ) * rPend;
            var ballY = Math.cos( angle ) * rPend;

            context.fillStyle = 'rgba(255,255,255,0.51)';
            context.globalCompositeOperation = 'destination-out';
            context.fillRect( 0, 0, canvasWidth, canvasHeight );
            context.globalCompositeOperation = 'source-over';
            context.save();

            context.beginPath();
            context.strokeStyle = '#838586';
            context.lineWidth = 2;
            if ( width == maxCanvasWidth ) {
                context.moveTo( canvasWidth / 2, 0 );
                context.lineTo( -ballX + canvasWidth / 2, ballY );
            } else {
                context.moveTo( canvasWidth * 0.699, 0 );
                context.lineTo( -ballX + canvasWidth * 0.699, ballY );
            }
            context.closePath();
            context.stroke();

            if ( width == maxCanvasWidth ) {
                context.translate( canvasWidth / 2, 0 );
            } else {
                context.translate( canvasWidth * 0.699, 0 );
            }

            context.rotate( angle );

            if ( lightOn && img.src.indexOf( onLamp ) == -1 ) {
                img = img2;
                that.props.onEnd();
                that.setState({ fade: true });
            }

            if ( width == maxCanvasWidth ) {
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
                    -canvasWidth * 0.314 / 2,
                    rPend,
                    canvasWidth * 0.314,
                    canvasWidth * 0.314 * 1.196
                );
            }

            context.restore();
            prev = angle;
        };

        animationTimeout = setTimeout(() => {
            var sim = PendulumSim( 2, 5, Math.PI * 70 / 100, 10, render );
        }, 1000 );

        /*
        animationTimeout = setTimeout(() => {
            //var sim = PendulumSim( 2, 5, Math.PI * 70 / 100, 10, render );
            // instantiate new Animation object
            var anim = new Animation( 'canvas' );
            var context = anim.getContext();
            var canvas = anim.getCanvas();
            var img = new Image();
            img.src = offLamp;

            var amplitude = -Math.PI * 0.6;
            var period = 4000;
            var theta = 0;
            var pendulumLength = 150;
            var pendulumWidth = 2;
            var rotationPointX = canvas.width / 2;
            var rotationPointY = 0;

            anim.setStage( function() {
                theta = ( amplitude * Math.sin(( 2 * Math.PI * this.getTime()) / period )) + Math.PI / 2;
                this.clear();

                context.beginPath();
                var endPointX = rotationPointX + ( pendulumLength * Math.cos( theta ));
                var endPointY = rotationPointY + ( pendulumLength * Math.sin( theta ));
                context.beginPath();
                context.moveTo( rotationPointX, rotationPointY );
                context.lineTo( endPointX, endPointY );
                context.lineWidth = pendulumWidth;
                context.strokeStyle = '#838586';
                context.stroke();

                context.translate( endPointX, endPointY );
                context.rotate( theta - Math.PI / 2 );
                context.drawImage(
                    img,
                    -60,
                    0,
                    120,
                    143
                );
                context.rotate( -theta + Math.PI / 2 );
                context.translate( -endPointX, -endPointY );
            });
            anim.start();
        }, 1000 );*/
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
