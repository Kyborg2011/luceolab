import React from 'react';
import classNames from 'classnames';
import styles from './MainHeading.css';

class MainHeading extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            text: props.text,
            subTitle: props.subTitle || null,
            darkStyle: ( typeof props.darkstyle !== 'undefined' ) ? true : false,
            style: props.style || {},
        };
    }

    render() {
        const { text, subTitle, darkStyle, style } = this.state;

        return (
            <div className={classNames( styles.mainHeadingWrapper, { 'dark-style-header': darkStyle })} style={style}>
                <h1 className={styles.h1}>{text}</h1>
                {subTitle && ( <h3 className={styles.h3}>{subTitle}</h3> )}
            </div>
        );
    }
}

export default MainHeading;
