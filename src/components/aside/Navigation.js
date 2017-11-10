import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { Link, withRouter } from 'react-router-dom';

import styles from './Navigation.css';

class Navigation extends React.Component {
    render() {
        return (
        <aside className={classNames( styles.secondaryNavigation, { 'blurred': this.props.location.pathname === '/' })}>
            <div className={styles.visibleColumn} />
            <nav>
                <Link className={styles.active} to="/">Home</Link>
                <Link to="/how-we-work">How we work</Link>
                <a href="#">Services</a>
                <Link to="/selected-works">Selected works</Link>
                <a href="#">About us</a>
                <a href="#">Our team</a>
                <Link to="/contacts">Contact</Link>
            </nav>
        </aside>
        );
    }
}

export default withRouter( Navigation );
