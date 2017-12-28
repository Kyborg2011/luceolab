import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {
  withRouter
} from 'react-router-dom';

import styles from './HowWeWork.css';
import bgStyles from '../../shared/styles/Background.css';
import Button from '../../button/Button';
import MainHeading from '../main-heading/MainHeading';

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
        };
    }

    handleClick( e ) {
        e.preventDefault();
    }

    render() {
        const { pageClassName } = this.state;

        return (
            <div className={classNames( bgStyles.background, pageClassName )}>
                <div>
                    <MainHeading text="how we work" />
                    <div className={styles.pageWrapper}>
                        <div className={styles.videoContainer} />
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter( HowWeWork );
