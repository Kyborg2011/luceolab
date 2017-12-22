import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

import layout from '../../shared/styles/Layout.css';
import styles from './Services.css';
import animations from '../../shared/styles/Animations.css';
import Button from '../../button/Button';
import MainHeading from '../main-heading/MainHeading';

import designBrandingIcon from '../../../assets/img/icons/services-designbranding.png';
import itConsultingIcon from '../../../assets/img/icons/services-itconsulting.png';
import marketingIcon from '../../../assets/img/icons/services-marketing.png';
import webdevIcon from '../../../assets/img/icons/services-webdev.png';

const animationStyle = {
    transform: 'translateY(-150px)',
    transition: 'transform 1s ease'
};

class Services extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            opennedServiceIndex: -1,
        };
    }

    handleClick( e ) {
        e.preventDefault();
    }

    render() {
        const { opennedServiceIndex } = this.state;

        const openServiceAnimation = ( i ) => {
            if ( opennedServiceIndex === i ) {
                return animations.serviceOpen;
            }
        };

        return (
            <div>
                <MainHeading darkstyle text="services" />
                <div className={styles.pageWrapper}>
                    <div className={styles.inner}>
                        <p className={styles.description}>
                            LuceoLab is a middle-sized digital agency from Ukraine.
                            What are we doing? We craft digital experiences.
                            With the most top-notch technologies, LuceoLab offers
                            a robust suite of digital services, including inventive
                            web design and development. We driven by top world standards
                            in web. <span style={{ fontWeight: 600 }}>Our products create immediate marketing impact
                            and increases your business revenue.</span>
                        </p>
                    </div>
                    <ul className={styles.list}>
                        <li className={openServiceAnimation( 0 )} onClick={() => {
                            this.setState({ opennedServiceIndex: 0 })
                        }}>
                            <div className={styles.listInnerWrapper}>
                                <p className={styles.icon}>
                                    <img src={webdevIcon} alt="Web development" />
                                </p>
                                <h4>web development</h4>
                                <div className={styles.details}>
                                    <p>
                                        According to <a href="https://blog.hubspot.com/blog/tabid/6307/bid/14953/what-do-76-of-consumers-want-from-your-website-new-data.aspx" target="_blank">this @HubSpot survey</a>
                                        about web-development: 76% of consumers say the most important factor in a website's
                                        design is "the website makes it easy for me to find what I want."<br/>
                                        The main principle by which LuceoLab is guided is the clarity of vision.
                                        Therefore, we consider the main criteria for the quality of our work:
                                        <ul>
                                            <li>Simplicity of the UI (user interface)</li>
                                            <li>Сlear UX (user experience)</li>
                                            <li>Maximum accessibility of the web content</li>
                                            <li>We use only <span style={{ fontWeight: 600 }}>responsive web design</span></li>
                                        </ul>
                                        We continually improve our skills,
                                        that's why we are not afraid to use the
                                        latest trends in the world of web developing:
                                    </p>
                                    <Button label="request" />
                                </div>
                            </div>
                        </li>
                        <li className={openServiceAnimation( 1 )} onClick={() => {
                            this.setState({ opennedServiceIndex: 1 })
                        }}>
                            <div className={styles.listInnerWrapper}>
                                <p className={styles.icon}>
                                    <img src={designBrandingIcon} alt="Design & Branding" />
                                </p>
                                <h4>design & branding</h4>
                                <div className={classNames( styles.details )}>
                                    Lorem ipsum dolor sit amet, consectetur<br />
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur
                                        Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur
                                        Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur
                                        Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur
                                    </p>
                                    <Button label="request" />
                                </div>
                            </div>
                        </li>
                        <li className={openServiceAnimation( 2 )} onClick={() => {
                            this.setState({ opennedServiceIndex: 2 })
                        }}>
                            <div className={styles.listInnerWrapper}>
                                <p className={styles.icon}>
                                    <img src={marketingIcon} alt="Digital marketing" />
                                </p>
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
                            </div>
                        </li>
                        <li className={openServiceAnimation( 3 )} onClick={() => {
                            this.setState({ opennedServiceIndex: 3 })
                        }}>
                            <div className={styles.listInnerWrapper}>
                                <p className={styles.icon}>
                                    <img src={itConsultingIcon} alt="IT consulting" />
                                </p>
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
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Services;
