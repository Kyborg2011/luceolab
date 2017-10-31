import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

import styles from './Navigation.css';

class Navigation extends React.Component {
    render() {
        return (
        <aside className={classNames( styles.secondaryNavigation, 'blurred' )}>
            <div className={styles.visibleColumn} />
            <nav>
                <a className={styles.active} href="#">Home</a>
                <a href="#">How we work</a>
                <a href="#">Services</a>
                <a href="#">Selected works</a>
                <a href="#">About us</a>
                <a href="#">Our team</a>
                <a href="#">Contact</a>
            </nav>
        </aside>
        );
    }
}

export default Navigation;
