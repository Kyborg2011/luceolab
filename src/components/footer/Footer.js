import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

import styles from './Footer.css';

class Footer extends React.Component {
  render() {
    return (
        <footer className={classNames(styles.footer, 'blurred')}>
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
