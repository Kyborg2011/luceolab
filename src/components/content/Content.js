import React from 'react';
import ReactDOM from 'react-dom';

import styles from './Content.css';
import largeLogo from '../../assets/img/homepage-logo-large.png';
import Button from '../Button/Button';

class Content extends React.Component {
  render() {
    return (
        <div className={styles.mainContent}>
            <div className={styles.largeLogo}>
                <img src={largeLogo} alt="LuceoLab" />
            </div>
            <hr className={styles.homepageLine} />
            <h1 className={styles.homepageMainPhrase}>
                The digital agency that<br />makes things clear
            </h1>
            <Button label="How we work" reverse={true} />
        </div>
    );
  }
}

export default Content;
