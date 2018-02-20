import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.css';
import Button from '../button/Button';
import ResponsiveNavigation from './ResponsiveNavigation';

const additionalColors = [
    '#FF5964',
    '#FBBD63',
    '#76A6B1',
    '#94E8B4',
    '#D81159',
];

function getRandomInt( min, max ) {
    min = Math.ceil( min );
    max = Math.floor( max );
    return Math.floor( Math.random() * ( max - min )) + min;
}

class Header extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            backgroundColor: '#FBBD63',
        };
    }

    componentDidMount() {
        setInterval(() => {
            let maxNumber = additionalColors.length;
            let index = getRandomInt( 0, --maxNumber );
            this.setState({ backgroundColor: additionalColors[ index ] });
        }, 10000 );
    }

    render() {
        const { backgroundColor } = this.state;
        return (
            <header className={styles.header}>
                <Link style={{ backgroundColor: backgroundColor }} className={styles.headerLogo} to="/" title="LuceoLab - Digital agency" />
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
                    <Button backgroundColor={backgroundColor} className={styles.requestBtn} label="send a request" />
                </nav>
                <ResponsiveNavigation />
            </header>
        );
    }
}

export default Header;
