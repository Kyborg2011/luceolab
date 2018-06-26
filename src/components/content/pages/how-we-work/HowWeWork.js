import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {
  withRouter,
  Link
} from 'react-router-dom';
import { Helmet } from 'react-helmet';

import styles from './HowWeWork.css';
import bgStyles from '../../../shared/styles/Background.css';
import Button from '../../../button/Button';
import MainHeading from '../../main-heading/MainHeading';
import Player from '@vimeo/player';

class HowWeWork extends React.Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    }

    static VIDEO_CONTAINER_MARGIN_BOTTOM = 15;

    constructor( props ) {
        super( props );
        this.state = {
            pageClassName: bgStyles[ props.location.pathname.replace( '/', 'll_' ) ],
            videoWidth: null,
            videoHeight: null,
        };
    }

    componentDidMount() {
        if ( process.env.BROWSER ) {
            setTimeout(() => {
                let height = document.getElementById( 'video-wrapper' ).clientHeight - HowWeWork.VIDEO_CONTAINER_MARGIN_BOTTOM;
                let width = document.getElementById( 'video-wrapper' ).clientWidth;


                console.log( width );
                console.log( height );

            /* Video has 1080p -> 16:9 -> coefficient 0.5625 */
                width = Math.min( width, height / 0.5625  );
                height = width * 0.5625;
                height++;


                this.setState({
                    videoWidth: width,
                    videoHeight: height,
                });

                var options = {
                    id: 254140924,
                    title: false,
                    byline: false,
                    badge: false,
                    portrait: false,
                    autoplay: true,
                    muted: true,
                };
                var handstick = new Player( document.getElementById( 'embed' ), options );

                ( function() {
                    var throttle = function( type, name, obj ) {
                        obj = obj || window;
                        var running = false;
                        var func = function() {
                            if ( running ) {
                                return;
                            }
                            running = true;
                            requestAnimationFrame( function() {
                                obj.dispatchEvent( new CustomEvent( name ));
                                running = false;
                            });
                        };
                        obj.addEventListener( type, func );
                    };

                /* init - you can init any event */
                    throttle( 'resize', 'optimizedResize' );
                })();

            // handle event
                window.addEventListener( 'optimizedResize', () => {
                    let height = document.getElementById( 'video-wrapper' ).clientHeight - HowWeWork.VIDEO_CONTAINER_MARGIN_BOTTOM;
                    let width = document.getElementById( 'video-wrapper' ).clientWidth;

                /* Video has 1080p -> 16:9 -> coefficient 0.5625 */
                    width = Math.min( width, height / 0.5625  );
                    height = width * 0.5625;

                    this.setState({
                        videoWidth: width,
                        videoHeight: height,
                    });

                    console.log( 'Resource conscious resize callback!' );
                });
            }, 2000 );
        }
    }

    handleClick( e ) {
        e.preventDefault();
    }

    render() {
        const { pageClassName, videoWidth, videoHeight } = this.state;
        let stylesWrapper = { };
        if ( videoWidth && videoHeight ) {
            stylesWrapper.width = videoWidth + 'px';
            stylesWrapper.height = videoHeight + 'px';
            styles.flex = 'none';
        }

        return (
                <div>
                    <Helmet
                      title="How We Work - LuceoLab"
                    />
                    <MainHeading text="how we work" style={{ marginBottom: '20px' }} />
                    <div className={styles.pageWrapper} style={{  }}>
                        <Link to="/">
                            <i className="fa fa-chevron-circle-left" aria-hidden="true" />
                            home
                        </Link>
                        <div id="video-wrapper" className={styles.videoContainer}>
                            <div id="embed" style={stylesWrapper}>
                                <div className={styles.ldsGear}>
                                    <div>
                                        <div/>
                                        <div/>
                                        <div/>
                                        <div/>
                                        <div/>
                                        <div/>
                                        <div/>
                                        <div/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link to="/services">
                            <i className="fa fa-chevron-circle-right" aria-hidden="true" />
                            services
                        </Link>
                    </div>
                </div>
        );
    }
}

export default withRouter( HowWeWork );
