import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

import styles from './Content.css';
import largeLogo from '../../assets/img/homepage-logo-large.png';
import Button from '../button/Button';
import SwingingLogo from './SwingingLogo';

class Content extends React.Component {
    handleClick( e ) {
        e.preventDefault();
        console.log( this.props );
    }
    render() {
        return (
            <div className={styles.mainContent}>
                <div className={styles.largeLogo}>
                    <img src={largeLogo} alt="LuceoLab" />
                </div>
                <SwingingLogo />
                <div className={classNames( 'blurred', styles.homepageMainContent )}>
                    <h1 className={classNames( styles.homepageMainPhrase )}>
                        The digital agency that<br />makes things clear
                    </h1>
                    <Button label="How we work" reverse onClick={this.handleClick.bind( this )} />
                </div>
            </div>
        );
    }
}

export default Content;
