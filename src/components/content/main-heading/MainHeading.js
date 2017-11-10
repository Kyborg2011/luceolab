import React from 'react';
import classNames from 'classnames';
import styles from './MainHeading.css';

class MainHeading extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            text: props.text,
            darkStyle: ( typeof props.darkstyle !== 'undefined' ) ? true : false,
        };
    }

    render() {
        const { text, darkStyle } = this.state;

        return (
            <div className={classNames( styles.mainHeadingWrapper, { 'dark-style-header': darkStyle })}>
                <h1 className={styles.h1}>{text}</h1>
            </div>
        );
    }
}

export default MainHeading;
