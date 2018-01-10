import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {
  withRouter,
  Link
} from 'react-router-dom';
import { Player } from 'video-react';

import styles from './HowWeWork.css';
import '../../shared/styles/VideoReact.css';
import bgStyles from '../../shared/styles/Background.css';
import Button from '../../button/Button';
import MainHeading from '../main-heading/MainHeading';
import videoSource from '../../../assets/video/videoinfographic.mp4';


class HowWeWork extends React.Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    }

    constructor( props ) {
        super( props );
        this.state = {
            pageClassName: bgStyles[ props.location.pathname.replace( '/', 'll_' ) ],
            videoWidth: 0,
            videoHeight: 0,
        };
    }

    componentDidMount() {
        let height = document.getElementById( 'video-wrapper' ).clientHeight;
        let width = document.getElementById( 'video-wrapper' ).clientWidth;

        /* Video has 1080p -> 16:9 -> coefficient 0.5625 */
        width = Math.min( width, height / 0.5625  );
        height = width * 0.5625;
        this.setState({
            videoWidth: width,
            videoHeight: height,
        });
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
                            <Player
                              playsInline
                              autoPlay
                              muted
                              src={videoSource}
                            />
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
