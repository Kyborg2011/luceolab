import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.css';
import Button from '../button/Button';
import ResponsiveNavigation from './ResponsiveNavigation';

class Header extends React.Component {
    render() {
        return (
        <header className={styles.header}>
            <Link className={styles.headerLogo} to="/" alt="LuceoLab digital agency" />
            <nav className={styles.primaryNav}>
                <a href="#" target="_blank"><i className="fa fa-facebook-square" aria-hidden="true" />
</a>
                <a href="#" target="_blank"><i className="fa fa-instagram" aria-hidden="true" /></a>
                <a href="#" target="_blank"><i className="fa fa-telegram" aria-hidden="true" /></a>
                <a href="mailto:info@luceolab.com" target="_blank"><i className="fa fa-envelope-open" aria-hidden="true" />
</a>
                <Button className={styles.requestBtn} label="send a request" />
                <a className={styles.languageBtn} href="#" target="_blank">ru</a>
            </nav>
            <ResponsiveNavigation />
        </header>
        );
    }
}

export default Header;
