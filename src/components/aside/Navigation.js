import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { NavLink, withRouter } from 'react-router-dom';

import styles from './Navigation.css';

class Navigation extends React.Component {
    render() {
        return (
            <aside className={classNames( styles.secondaryNavigation )}>
                <div className={styles.visibleColumn} />
                <nav>
                    <NavLink exact activeClassName={styles.active} to="/">Home</NavLink>
                    <NavLink activeClassName={styles.active} to="/how-we-work">How we work</NavLink>
                    <NavLink activeClassName={styles.active} to="/services">Services</NavLink>
                    <NavLink activeClassName={styles.active} to="/our-team">Our team</NavLink>
                    <NavLink activeClassName={styles.active} to="/our-beliefs">Our beliefs</NavLink>
                    <NavLink activeClassName={styles.active} to="/contacts">Contact</NavLink>
                </nav>
            </aside>
        );
    }
}

export default withRouter( Navigation );
