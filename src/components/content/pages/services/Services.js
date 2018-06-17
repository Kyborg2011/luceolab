import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {
  withRouter
} from 'react-router-dom';
import emitter from '../../../shared/utils/mrEmitter';

import layout from '../../../shared/styles/Layout.css';
import bgStyles from '../../../shared/styles/Background.css';
import styles from './Services.css';
import animations from '../../../shared/styles/Animations.css';
import Button from '../../../button/Button';
import MainHeading from '../../main-heading/MainHeading';

import designBrandingIcon from '../../../../assets/img/icons/services-designbranding.png';
import itConsultingIcon from '../../../../assets/img/icons/services-itconsulting.png';
import marketingIcon from '../../../../assets/img/icons/services-marketing.png';
import webdevIcon from '../../../../assets/img/icons/services-webdev.png';

class Services extends React.Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    }

    constructor( props ) {
        super( props );
        this.state = {
            pageClassName: bgStyles[ props.location.pathname.replace( '/', 'll_' ) ],
            opennedServiceIndex: -1,
            closedServiceIndex: -1,
            isModalActive: '',
            isOpen: false,
            isClosed: false,
            isRemoveOverlay: false,
        };
    }

    componentDidMount() {
        let list = document.getElementsByClassName( styles.list );
        let modalContent = document.getElementById( 'modal-content' ).getElementsByTagName( 'p' )[ 0 ];
        let width = ( window.innerWidth > 0 ) ? window.innerWidth : screen.width;
        if ( width < 767 ) {
            console.log( list.length );
            let listElements = list[ 0 ].childNodes;
            listElements.forEach(( val ) => {
                val.addEventListener( 'click', ( e ) => {
                    e.preventDefault();
                    modalContent.innerHTML = val.getElementsByTagName( 'div' )[ 0 ].getElementsByTagName( 'div' )[ 0 ].getElementsByTagName( 'p' )[ 0 ].innerHTML;
                    this.setState({
                        isModalActive: styles.activeModal,
                    });
                });
            });
        }
    }

    handleClick( e ) {
        e.preventDefault();
    }

    render() {
        const { opennedServiceIndex, pageClassName, closedServiceIndex, isModalActive, isOpen, isClosed, isRemoveOverlay } = this.state;

        const openServiceAnimation = ( i ) => {
            if ( closedServiceIndex === i ) {
                return animations.serviceOpen + ' ' + animations.serviceClose;
            }
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
                            in web.<br />
                            <span style={{ fontWeight: 600, textAlign: 'center', display: 'block' }}>Our products create immediate marketing impact
                            and increases your business revenue!</span>
                        </p>
                    </div>
                    <ul className={styles.list}>
                        <li className={openServiceAnimation( 0 )}>
                            <div className={styles.listInnerWrapper}>
                                <p className={styles.icon}>
                                    <img src={webdevIcon} alt="Web development" />
                                </p>
                                <h4>web development</h4>
                                <a href="" className={styles.closeBtn} onClick={( e ) => {
                                    e.preventDefault();

                                    if ( isOpen ) {
                                        setTimeout(() => {
                                            this.setState({
                                                isRemoveOverlay: true,
                                            });
                                        }, 2000 );
                                    } else {
                                        this.setState({
                                            isRemoveOverlay: false,
                                        });
                                    }
                                    this.setState({ isOpen: ( isOpen ) ? false : true, isClosed: ( isOpen ) ? true : false });

                                    this.setState({ opennedServiceIndex: -1, closedServiceIndex: 0 });
                                    setTimeout(() => {
                                        this.setState({ opennedServiceIndex: -1, closedServiceIndex: -1 });
                                    }, 2000 );
                                }}>&#10005;</a>
                                <div className={styles.details}>
                                    <p>
                                        We create beautiful custom‑designed websites with unique UX, well-understood for everyone.
                                        Through continually improving our skills, we are not afraid to use the latest trends in the world of web developing.<br/><br/>
                                        <span style={{ color: '#D81159', fontWeight: 'bold' }}> Our agency driven by the main single principle - the clarity of vision.</span><br/>Due to that we find the necessary balance between the complexity of the selected technologies and the real need for each individual project.<br/>
                                        <span style={{ textAlign: 'center', display: 'block' }}>
                                            Some technologies that inspire us:
                                        </span>
                                        <span className={styles.technoligiesList}>
                                            <a href="https://reactjs.org/" title="ReactJS" target="_blank">
                                                <img style={{ height: '50px' }} src={require( '../../../../assets/img/icons/react-js.png' )} />
                                            </a>
                                            <a href="http://www.ecma-international.org/ecma-262/6.0/index.html" title="ECMAScript 2015" target="_blank">
                                                <img src={require( '../../../../assets/img/icons/es6.svg' )} />
                                            </a>
                                            <a href="https://www.docker.com/" title="Docker" target="_blank">
                                                <img src={require( '../../../../assets/img/icons/docker.svg' )} />
                                            </a>
                                            <a href="https://symfony.com/" title="Symfony" target="_blank">
                                                <img src={require( '../../../../assets/img/icons/symfony.png' )} />
                                            </a>
                                        </span>
                                    </p>
                                    <Button label={( opennedServiceIndex === 0 ) ? 'free request' : 'read more'} onClick={( e ) => {
                                        e.preventDefault();
                                        if ( isOpen ) {
                                            emitter.emit( 'request' );
                                        } else {
                                            this.setState({
                                                isRemoveOverlay: false,
                                            });
                                            this.setState({ isOpen: ( isOpen ) ? false : true, isClosed: ( isOpen ) ? true : false });
                                            this.setState({ opennedServiceIndex: 0, closedServiceIndex: -1 });
                                        }
                                    }} />
                                </div>
                            </div>
                        </li>
                        <li className={openServiceAnimation( 1 )}>
                            <div className={styles.listInnerWrapper}>
                                <p className={styles.icon}>
                                    <img src={designBrandingIcon} alt="design & ui/ux" />
                                </p>
                                <h4>design & ui/ux</h4>
                                <a href="" className={styles.closeBtn} onClick={( e ) => {
                                    e.preventDefault();
                                    if ( isOpen ) {
                                        setTimeout(() => {
                                            this.setState({
                                                isRemoveOverlay: true,
                                            });
                                        }, 2000 );
                                    } else {
                                        this.setState({
                                            isRemoveOverlay: false,
                                        });
                                    }
                                    this.setState({ isOpen: ( isOpen ) ? false : true, isClosed: ( isOpen ) ? true : false });
                                    this.setState({ opennedServiceIndex: -1, closedServiceIndex: 1 });
                                    setTimeout(() => {
                                        this.setState({ opennedServiceIndex: -1, closedServiceIndex: -1 });
                                    }, 2000 );
                                }}>&#10005;</a>
                                <div className={styles.details}>
                                    <p>
                                        <span className={styles.epigraph}>«Beauty will save the world» ― Fyodor Dostoyevsky</span><br/>
                                        If you are aiming to have really stunning unique UI/UX for your product, you need to use our services! LuceoLab is constantly following the newest trends in the industry, moreover we are strive for open up new approaches in user interfaces and web design.
                                        A browser window can be turned into anything: the theatrical scene, the painter's canvas, the page from the writer's diary. <br/><br/><span style={{ color: '#D81159', fontWeight: 'bold' }}>The desire for clarity of vision in everything that we do brings us to art. That is why we believe that a website can be not only a container for some piece of art, but in itself is a unique modern kind of art.</span><br/><br/>
                                    </p>
                                    <Button label={( opennedServiceIndex === 1 ) ? 'free request' : 'read more'} onClick={( e ) => {
                                        e.preventDefault();
                                        if ( isOpen ) {
                                            emitter.emit( 'request' );
                                        } else {
                                            this.setState({
                                                isRemoveOverlay: false,
                                            });
                                            this.setState({ isOpen: ( isOpen ) ? false : true, isClosed: ( isOpen ) ? true : false });
                                            this.setState({ opennedServiceIndex: 1, closedServiceIndex: -1 });
                                        }
                                    }} />
                                </div>
                            </div>
                        </li>
                        <li className={openServiceAnimation( 2 )}>
                            <div className={styles.listInnerWrapper}>
                                <p className={styles.icon}>
                                    <img src={marketingIcon} alt="Digital marketing" />
                                </p>
                                <h4>digital marketing</h4>
                                <a href="" className={styles.closeBtn} onClick={( e ) => {
                                    e.preventDefault();
                                    if ( isOpen ) {
                                        setTimeout(() => {
                                            this.setState({
                                                isRemoveOverlay: true,
                                            });
                                        }, 2000 );
                                    } else {
                                        this.setState({
                                            isRemoveOverlay: false,
                                        });
                                    }
                                    this.setState({ isOpen: ( isOpen ) ? false : true, isClosed: ( isOpen ) ? true : false });
                                    this.setState({ opennedServiceIndex: -1, closedServiceIndex: 2 });
                                    setTimeout(() => {
                                        this.setState({ opennedServiceIndex: -1, closedServiceIndex: -1 });
                                    }, 2000 );
                                }}>&#10005;</a>
                                <div className={styles.details}>
                                    <p>
                                        Why people buy something? Any goods or services? The main reason is emotions, pleasant memories. People buy the opportunity to spend a good time with good people. In the end, people buy what is beautiful, what causes a feeling of reverence.<br/><br/>
                                        We believe that beauty is an inherent quality of any kind of art. Art can evoke the most vivid feelings, touch the most secret corners of the human soul.<br/><br/>
                                        <span style={{ color: '#D81159', fontWeight: 'bold' }}>In our products, we strive to reflect the full spectrum of human feelings. Digital experience should become a holiday of existence, like the sunrise, the arrival of the long-awaited spring. Let's say "Yes!" to all sides of life in this world!</span>
                                    </p>
                                    <Button label={( opennedServiceIndex === 2 ) ? 'free request' : 'read more'} onClick={( e ) => {
                                        e.preventDefault();
                                        if ( isOpen ) {
                                            emitter.emit( 'request' );
                                        } else {
                                            this.setState({
                                                isRemoveOverlay: false,
                                            });
                                            this.setState({ isOpen: ( isOpen ) ? false : true, isClosed: ( isOpen ) ? true : false });
                                            this.setState({ opennedServiceIndex: 2, closedServiceIndex: -1 });
                                        }
                                    }} />
                                </div>
                            </div>
                        </li>
                        <li className={openServiceAnimation( 3 )}>
                            <div className={styles.listInnerWrapper}>
                                <p className={styles.icon}>
                                    <img src={itConsultingIcon} alt="Branding" />
                                </p>
                                <h4>branding</h4>
                                <a href="" className={styles.closeBtn} onClick={( e ) => {
                                    e.preventDefault();
                                    this.setState({ opennedServiceIndex: -1, closedServiceIndex: 3 });
                                    setTimeout(() => {
                                        this.setState({ opennedServiceIndex: -1, closedServiceIndex: -1 });
                                    }, 2000 );
                                    if ( isOpen ) {
                                        setTimeout(() => {
                                            this.setState({
                                                isRemoveOverlay: true,
                                            });
                                        }, 2000 );
                                    } else {
                                        this.setState({
                                            isRemoveOverlay: false,
                                        });
                                    }
                                    this.setState({ isOpen: ( isOpen ) ? false : true, isClosed: ( isOpen ) ? true : false });
                                }}>&#10005;</a>
                                <div className={styles.details}>
                                    <p />
                                    <Button label={( opennedServiceIndex === 3 ) ? 'free request' : 'read more'} onClick={( e ) => {
                                        e.preventDefault();
                                        if ( isOpen ) {
                                            emitter.emit( 'request' );
                                        } else {
                                            this.setState({
                                                isRemoveOverlay: false,
                                            });
                                            this.setState({ isOpen: ( isOpen ) ? false : true, isClosed: ( isOpen ) ? true : false });
                                            this.setState({ opennedServiceIndex: 3, closedServiceIndex: -1 });
                                        }
                                    }} />
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                {( isOpen || isClosed && !isRemoveOverlay ) && (
                    <div className={classNames( styles.overlay, { overlayClose: isClosed })} />
                )}
                <div className={classNames( styles.modal, isModalActive )}>
                    <div className={styles.modalContainer}>
                        <a href="" id="close-modal" onClick={( e ) => {
                            e.preventDefault();
                            this.setState({
                                isModalActive: '',
                            });
                        }}>
                            <i className="fa fa-times" aria-hidden="true" />
                        </a>
                        <div id="modal-content"><p/></div>
                        <Button label={'free request'} onClick={( e ) => {
                            e.preventDefault();
                            emitter.emit( 'request' );
                            this.setState({
                                isModalActive: '',
                            });
                        }} />
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter( Services );
