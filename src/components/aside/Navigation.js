import React from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import styles from './Navigation.css';

class Navigation extends React.Component {
    render() {
        return (
            <aside className={classNames( styles.secondaryNavigation )}>
                <div className={styles.visibleColumn} />
                <nav>
                    <NavLink activeClassName={styles.active} exact to="/">Home</NavLink>
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

export default Navigation;
