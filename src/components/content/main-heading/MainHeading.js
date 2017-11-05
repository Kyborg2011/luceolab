import React from 'react';
import styles from './MainHeading.css';

class MainHeading extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            text: props.text,
        };
    }

    render() {
        const { text } = this.state;
        return (
            <div className={styles.mainHeadingWrapper}>
                <h1 className={styles.h1}>{text}</h1>
            </div>
        );
    }
}

export default MainHeading;
