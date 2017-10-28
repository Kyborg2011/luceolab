import React from 'react';
import ReactDOM from 'react-dom';

import styles from './Footer.css';

class Footer extends React.Component {
  render() {
    return (
        <footer className={styles.footer}>
            <p>
                &copy; 2016 – 2017 «LuceoLab»
            </p>
            <p>
                All rights reserved
            </p>
        </footer>
    );
  }
}

export default Footer;
