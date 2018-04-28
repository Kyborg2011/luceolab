import React from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import styles from './ResponsiveNavigation.css';
import Button from '../button/Button';

class ResponsiveNavigation extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            open: null,
        };
        this.toggle = this.toggle.bind( this );
    }

    componentDidMount() {
        let nav = document.getElementsByClassName(styles.responsiveNavigationContainer)[0].getElementsByTagName('nav')[0];
        nav.childNodes.forEach(( val ) => {
            val.addEventListener( 'click', ( e ) => {
                this.toggle( e );
            });
        });
    }

    toggle() {
        this.setState({ open: ( !this.state.open ) && styles.visible });
    }

    render() {
        const { open } = this.state;

        return (
            <div className={styles.responsiveNavigationContainer}>
                <a onClick={this.toggle} className={
                    classNames(
                        styles[ 'navicon-button' ],
                        styles[ 'x' ],
                        ( open ) ? styles.open : null
                    )}>
                    <div className={styles.navicon} />
                </a>
                <nav className={open}>
                    <NavLink activeClassName={styles.active} exact to="/">Home</NavLink>
                    <NavLink activeClassName={styles.active} to="/how-we-work">How we work</NavLink>
                    <NavLink activeClassName={styles.active} to="/services">Services</NavLink>
                    <NavLink activeClassName={styles.active} to="/our-team">Our team</NavLink>
                    <NavLink activeClassName={styles.active} to="/our-beliefs">Our beliefs</NavLink>
                    <NavLink activeClassName={styles.active} to="/contacts">Contact</NavLink>
                    <Button className={styles.requestMobBtn} label="send a request" />
                </nav>
            </div>
        );
    }
}

export default ResponsiveNavigation;
