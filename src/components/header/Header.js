import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.css';
import Button from '../button/Button';
import ResponsiveNavigation from './ResponsiveNavigation';

class Header extends React.Component {
    render() {
        return (
        <header className={styles.header}>
            <Link className={styles.headerLogo} to="/" title="LuceoLab - Digital agency" />
            <nav className={styles.primaryNav}>
                <a href="mailto:info@luceolab.com" target="_blank">
                    <i className="fa fa-envelope-open-o" aria-hidden="true" />
                </a>
                <a href="#" target="_blank" className={styles.telegramIcon} />
                <a href="#" target="_blank">
                    <i className="fa fa-instagram" aria-hidden="true" />
                </a>
                <a className={styles.facebookIcon} href="#" target="_blank">
                    <i className="fa fa-facebook" aria-hidden="true" />
                </a>
                <a className={styles.githubIcon} href="https://github.com/Kyborg2011/luceolab" target="_blank"
                  title="We are Open Sourced!">
                    <i className="fa fa-github" aria-hidden="true" />
                </a>
                <Button className={styles.requestBtn} label="send a request" />
                <Link className={styles.languageBtn} to="/">ru</Link>
            </nav>
            <ResponsiveNavigation />
        </header>
        );
    }
}

export default Header;
