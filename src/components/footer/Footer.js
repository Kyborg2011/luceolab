import React from 'react';
import classNames from 'classnames';

import styles from './Footer.css';

class Footer extends React.Component {
    render() {
        return (
        <footer className={classNames( styles.footer )}>
            <p>
                &copy; 2016 – 2018 «LuceoLab»
            </p>
            <p>
                All rights reserved
            </p>
        </footer>
        );
    }
}

export default Footer;
