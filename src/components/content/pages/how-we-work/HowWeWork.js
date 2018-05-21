import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {
  withRouter,
  Link
} from 'react-router-dom';

import styles from './HowWeWork.css';
import bgStyles from '../../../shared/styles/Background.css';
import Button from '../../../button/Button';
import MainHeading from '../../main-heading/MainHeading';

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
        setTimeout(() => {
            let height = document.getElementById( 'video-wrapper' ).clientHeight - HowWeWork.VIDEO_CONTAINER_MARGIN_BOTTOM;
            let width = document.getElementById( 'video-wrapper' ).clientWidth;

            /* Video has 1080p -> 16:9 -> coefficient 0.5625 */
            width = Math.min( width, height / 0.5625  );
            height = width * 0.5625;
            this.setState({
                videoWidth: width,
                videoHeight: height,
            });
        }, 2000 );
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
                    <MainHeading text="how we work" style={{ marginBottom: '20px' }} />
                    <div className={styles.pageWrapper} style={{  }}>
                        <Link to="/">
                            <i className="fa fa-chevron-circle-left" aria-hidden="true" />
                            home
                        </Link>
                        <div id="video-wrapper" className={styles.videoContainer} style={stylesWrapper}>
                            {( videoWidth && videoHeight ) && (
                                <div>
                                    <iframe src="https://player.vimeo.com/video/254140924?title=0&byline=0&badge=0&portrait=0&color=fff&autoplay=1&player_id=player"
                                      width={videoWidth}
                                      height={videoHeight}
                                      frameBorder="0"
                                      webkitallowfullscreen
                                      mozallowfullscreen
                                      allowFullScreen
                                    />
                                    <script src="https://player.vimeo.com/api/player.js" />
                                </div>
                            )}
                            {( !videoWidth || !videoHeight ) && (
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
                            )}
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
