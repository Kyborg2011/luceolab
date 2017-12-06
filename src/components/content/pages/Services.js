import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

import layout from '../../shared/styles/Layout.css';
import styles from './Services.css';
import Button from '../../button/Button';
import MainHeading from '../main-heading/MainHeading';

import designBrandingIcon from '../../../assets/img/icons/services-designbranding.png';
import itConsultingIcon from '../../../assets/img/icons/services-itconsulting.png';
import marketingIcon from '../../../assets/img/icons/services-marketing.png';
import webdevIcon from '../../../assets/img/icons/services-webdev.png';

class Services extends React.Component {
    handleClick( e ) {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <MainHeading darkstyle text="services" />
                <div className={styles.pageWrapper}>
                    <div className={styles.inner}>
                        <p className={styles.description}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor sit amet,  dolor Lorem ipsum dolor r                        </p>
                    </div>
                    <ul className={styles.list}>
                        <li>
                            <div className={styles.icon}>
                                <img src={webdevIcon} alt="Web development" />
                            </div>
                            <h4>web development</h4>
                            <div className={styles.details}>
                                Lorem ipsum dolor sit amet, consectetur<br />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur
                                    Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur
                                    Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur
                                    Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur
                                </p>
                                <Button label="request" />
                            </div>
                        </li>
                        <li>
                            <div className={styles.icon}>
                                <img src={designBrandingIcon} alt="Design & Branding" />
                            </div>
                            <h4>design & branding</h4>
                            <div className={styles.details}>
                                Lorem ipsum dolor sit amet, consectetur<br />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur
                                    Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur
                                    Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur
                                    Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur
                                </p>
                                <Button label="request" />
                            </div>
                        </li>
                        <li>
                            <div className={styles.icon}>
                                <img src={marketingIcon} alt="Digital marketing" />
                            </div>
                            <h4>digital marketing</h4>
                            <div className={styles.details}>
                                Lorem ipsum dolor sit amet, consectetur<br />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur
                                    Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur
                                    Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur
                                    Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur
                                </p>
                                <Button label="request" />
                            </div>
                        </li>
                        <li>
                            <div className={styles.icon}>
                                <img src={itConsultingIcon} alt="IT consulting" />
                            </div>
                            <h4>it consulting</h4>
                            <div className={styles.details}>
                                Lorem ipsum dolor sit amet, consectetur<br />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur
                                    Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur
                                    Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur
                                    Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur
                                </p>
                                <Button label="request" />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Services;
