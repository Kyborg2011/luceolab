import React from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import styles from './Navigation.css';

class Navigation extends React.Component {
    render() {
        return (
            <aside className={classNames(
                styles.secondaryNavigation,
                ( this.props.darkstyle ) ? styles.darkstyle : null
            )}>
                <div className={styles.visibleColumn} />
                <nav>
                    <NavLink activeClassName={styles.active} exact to="/">Home</NavLink>
                    <NavLink activeClassName={styles.active} to="/how-we-work">How we work</NavLink>
                    <NavLink activeClassName={styles.active} to="/services">Services</NavLink>
                    <NavLink activeClassName={styles.active} to="/team">Our team</NavLink>
                    <NavLink activeClassName={styles.active} to="/about">Our beliefs</NavLink>
                    <NavLink activeClassName={styles.active} to="/contact">Contact</NavLink>
                </nav>
            </aside>
        );
    }
}

export default Navigation;
