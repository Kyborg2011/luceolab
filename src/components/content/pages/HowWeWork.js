import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

import styles from './HowWeWork.css';
import Button from '../../button/Button';
import MainHeading from '../main-heading/MainHeading';

class HowWeWork extends React.Component {
    handleClick( e ) {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <MainHeading text="how we work" />
                <div className={styles.videoContainer} />
            </div>
        );
    }
}

export default HowWeWork;
