import React from 'react';
import ReactDOM from 'react-dom';

import styles from './Content.css';
import largeLogo from '../../assets/img/homepage-logo-large.png';
import Button from '../Button/Button';
import SwingingLogo from './SwingingLogo';

class Content extends React.Component {
  render() {
      var back = (<div className={styles.largeLogo}>
          <img src={largeLogo} alt="LuceoLab" />
      </div>);
      
    return (
        <div className={styles.mainContent}>
            <SwingingLogo />

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
