import React from 'react';
import ReactDOM from 'react-dom';

import styles from './Header.css';

class Header extends React.Component {
  render() {
    return (
        <header className={styles.header}>
            <a className={styles.headerLogo} href="/" alt="LuceoLab"></a>
            <nav className={styles.primaryNav}>
                <a href="#" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                <a href="#" target="_blank"><i className="fa fa-facebook-square" aria-hidden="true"></i>
</a>
                <a href="mailto:info@luceolab.com" target="_blank"><i className="fa fa-envelope-open" aria-hidden="true"></i>
</a>
                <a href="#" className={styles.requestBtn}>send a request</a>
            </nav>
        </header>
    );
  }
}

export default Header;
