import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {
  withRouter
} from 'react-router-dom';
import { Helmet } from 'react-helmet';

import styles from './OurBeliefs.css';
import layout from '../../../shared/styles/Layout.css';
import Button from '../../../button/Button';
import MainHeading from '../../main-heading/MainHeading';

class OurBeliefs extends React.Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    }

    constructor( props ) {
        super( props );
        this.state = {
            currentSlide: 0,
            isRight: false,
            blockTimeout: false,
            slidingStarted: false,
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ isChairsVisible: true });
        }, 2500 );

        if ( process.env.BROWSER ) {
            var element = document.getElementById( 'our-beliefs-page-wrapper' );
            var startX = -1;
            var endX = 0;
            element.addEventListener( 'mousedown', ( e ) => {
                startX = e.pageX;
            }, false );
            element.addEventListener( 'mouseup', ( e ) => {
                endX = e.pageX;
                if ( startX != -1 ) {
                    let delta = endX - startX;
                    if ( delta < -50 && this.state.currentSlide < 3 ) {
                        this.setState({
                            currentSlide: this.state.currentSlide + 1,
                            isRight: false,
                            blockTimeout: true,
                            slidingStarted: true,
                        });
                        setTimeout(() => {
                            this.setState({ blockTimeout: false });
                        }, 1500 );
                    }
                    if ( delta > 50 && this.state.currentSlide > 0 ) {
                        this.setState({
                            currentSlide: this.state.currentSlide - 1,
                            isRight: true,
                            blockTimeout: true,
                            slidingStarted: true,
                        });
                        setTimeout(() => {
                            this.setState({ blockTimeout: false });
                        }, 1500 );
                    }
                }
                startX = -1;
            }, false );
            element.addEventListener( 'touchmove', ( e ) => {
                e.preventDefault();
            });
            element.addEventListener( 'touchstart', ( e ) => {
                var touch = e.touches[ 0 ] || e.changedTouches[ 0 ];
                startX = touch.pageX;
            }, false );
            element.addEventListener( 'touchend', ( e ) => {
                var touch = e.touches[ 0 ] || e.changedTouches[ 0 ];
                endX = touch.pageX;
                if ( startX != -1 ) {
                    let delta = endX - startX;
                    if ( delta < -50 && this.state.currentSlide < 3 ) {
                        this.setState({
                            currentSlide: this.state.currentSlide + 1,
                            isRight: false,
                            blockTimeout: true,
                            slidingStarted: true,
                        });
                        setTimeout(() => {
                            this.setState({ blockTimeout: false });
                        }, 1500 );
                    }
                    if ( delta > 50 && this.state.currentSlide > 0 ) {
                        this.setState({
                            currentSlide: this.state.currentSlide - 1,
                            isRight: true,
                            blockTimeout: true,
                            slidingStarted: true,
                        });
                        setTimeout(() => {
                            this.setState({ blockTimeout: false });
                        }, 1500 );
                    }
                }
                startX = -1;
            }, false );

            ( function() {
                var throttle = function( type, name, obj ) {
                    obj = obj || window;
                    var running = false;
                    var func = function() {
                        if ( running ) {
                            return;
                        }
                        running = true;
                        requestAnimationFrame( function() {
                            obj.dispatchEvent( new CustomEvent( name ));
                            running = false;
                        });
                    };
                    obj.addEventListener( type, func );
                };
                throttle( 'resize', 'optimizedResize' );
            })();

            window.addEventListener( 'optimizedResize', () => {
                this.setState({ currentSlide: this.state.currentSlide });

                console.log( 'Resource conscious resize callback!' );
            });
        }
    }

    handleClick( e ) {
        e.preventDefault();
    }

    render() {
        const { currentSlide, isRight, isChairsVisible, blockTimeout, slidingStarted } = this.state;

        const getClassNames = ( id ) => {
            let className = '';

            if ( !isRight && id > currentSlide || isRight && id > currentSlide ) {
                className += styles.right + ' ';
            }

            if ( id == currentSlide ) {
                className = styles.active;
            }

            if ( slidingStarted ) {
                className += ' ' + styles.slidingStarted;
            }

            return className;
        };

        const titles = [
            ( <span>how we see the future?</span> ),
            ( <span>how we making art?</span> ),
            ( <span>how we clarify all things?</span> ),
            ( <div>how we wrote <span style={{ textDecoration: 'line-through', color: '#545b67' }}>this essay</span> LuceoLab?</div> ),
        ];

        var subTitle = titles[ currentSlide ];
        var h1Title = 'our beliefs';
        if ( process.env.BROWSER ) {
            if ( window.innerWidth < 800 ) {
                h1Title = titles[ currentSlide ];
                subTitle = '';
            }
        }

        return (
            <div className={styles.ourBeliefsPage}>
                <Helmet
                  title="Our beliefs | LuceoLab"
                />
                <MainHeading darkstyle text={h1Title} subTitle={subTitle} />
                <div className={styles.controls}>
                    <a href="" className={classNames({ disableArr: ( currentSlide == 0 ) })} title="Back" onClick={( e ) => {
                        if ( currentSlide > 0 && !blockTimeout ) {
                            this.setState({
                                currentSlide: this.state.currentSlide - 1,
                                isRight: true,
                                blockTimeout: true,
                                slidingStarted: true,
                            });
                            setTimeout(() => {
                                this.setState({ blockTimeout: false });
                            }, 1500 );
                        }
                        e.preventDefault();
                    }}><i className="fa fa-angle-left" aria-hidden="true" />&nbsp;&nbsp;<span>back</span></a>
                    <a href="" className={classNames({ disableArr: ( currentSlide == 3 ) })} title="Read more" onClick={( e ) => {
                        if ( currentSlide < 3 && !blockTimeout ) {
                            this.setState({
                                currentSlide: this.state.currentSlide + 1,
                                isRight: false,
                                blockTimeout: true,
                                slidingStarted: true,
                            });
                            setTimeout(() => {
                                this.setState({ blockTimeout: false });
                            }, 1500 );
                        }
                        e.preventDefault();
                    }}><span>read more</span>&nbsp;&nbsp;<i className="fa fa-angle-right" aria-hidden="true" /></a>
                </div>
                <div id="our-beliefs-page-wrapper" className={styles.pageWrapper}>
                    <div className={styles.inner}>
                        <div className={classNames( styles.slide, getClassNames( 0 ))}>
                            <p className={styles.epigraph}>
                                «Freedom is the source of beauty»<br/>― Albert Camus
                            </p>
                            <p className={styles.content}>
                                Clarity of vision is the main principle on which we founded our business. Guided by it, we came to art, as the most realistic reflection of the whole diversity of our lives. The creation of any piece of art is impossible without personal freedom. Otherwise, under the influence of economy and politics, modern "art" loses its own values; the result of this influence is creative infertility.<br/><br/>
                                We believe that in the modern world, the influence of the capitalist market on art is greater than ever. Fortunately, now there are technologies that will make it possible in the future to achieve maximum personal freedom, independence from any political structures, banking system and other institutes of suppression of individualities. Namely:<br/>
                                <span className={styles.technoligiesList}>
                                    <a href="https://www.blockchain.com/" target="_blank">
                                        <img alt="Blockchain - technology of the future" src={require( '../../../../assets/img/icons/bc.svg' )} />
                                    </a>
                                </span>
                                So, in development of new blockchain based technologies we see one of the most important direction of our work and way of thinking. We believe that blockchain has a great potential to change our lives in a fundamental way!
                                <br/><br/><span style={{ textAlign: 'center', display: 'block' }} className={styles.bold}>Business for us is a creative act in which a person is able to claim his own unique universe, free from all limitations.</span>
                            </p>
                        </div>
                        <div className={classNames( styles.slide, getClassNames( 1 ))}>
                            <p className={styles.epigraph}>
                                «We have art in order not to die of the truth»<br/> ― Friedrich Nietzsche
                            </p>
                            <p className={styles.content}>
                                Art is the best school of clarity. It requires daily effort, self-mastery, an accurate assessment of the boundaries of truth.<br/><br/>
                                We believe that a website can be not only a container for some piece of art, but in itself is a unique modern kind of art.  <span className={styles.bold}>A browser window can be turned into anything:
                                theatrical scene, painter's canvas, writer's diary and so on.</span><br/><br/>
                                When the scientific method exhausts itself, the artistic method comes to the rescue. Real art, in our opinion, should evoke a sense of infinity, an infinitely clear and precise vision of the life problem. This is our sense of beauty - impression, which we strive to achieve in everything we do.<br/><br/><span style={{ textAlign: 'center', display: 'block' }} className={styles.bold}>The feeling of beauty is the main force driving our developers to grow up every day! Beauty not only in visual content and UI, but also in each step of the process of creation.</span>
                            </p>
                        </div>
                        <div className={classNames( styles.slide, getClassNames( 2 ))}>
                            <p className={styles.epigraph}>
                                «Task: to see things as they are. Means: to look at them with a hundred eyes, from many persons»<br/> ― Friedrich Nietzsche
                            </p>
                            <p className={styles.content}>
                                It is all about preserving clarity in a world where the nebula reigns.
                                Indeed, the sense of deception, the manipulation of consciousness today is strongly manifested throughout the world.
                                <br/><br/><span className={styles.bold}> We claim that the Internet is the only technology that can give us the
                                maximum number of points of view, the primary source of any information.</span><br/><br/>
                                Combining art, privacy, openness and clear workflow - we get <span className={styles.bold}>the concept of creative solutions</span> striving for maximum freedom. Firstly, freedom in our workflow, in the interaction between clients, developers, designers and company management. Secondly, freedom in effort to freely disseminate the results of our work. <span className={styles.bold}>We truly love Open Source! We strive for contributing to Open Source community.</span><br/><br/>
                                <span style={{ textAlign: 'center', display: 'block' }} className={styles.bold}>LuceoLab inevitably strives to increase the diversity in the world, its development and transformation!</span>
                            </p>
                        </div>
                        <div className={classNames( styles.slide, getClassNames( 3 ))}>
                            <p className={styles.epigraph}>
                                Luceo (from latin) ― I dawn, become light, become clear
                            </p>
                            <p className={styles.content}>
                                The character of LuceoLab is enclosed in the name itself. We want to become a source of light, that will guide you to the highest success in your business. LuceoLab is a comet, whose flight you will never forget!<br/><br/>
                                Everyone talks about effective trade on the Internet ― this is not enough for us. We take it higher, we talk about our life, in all its diversity.<br/><br/>
                                All that we need is go through life without closing eyes to anything, accepting all that life brings, each time answering to it: "yes".<br/><br/>
                                We find ecstasy only in moving forward, motion without stopping, however, with the appointment. <span className={styles.bold}>We want to get into a city in which no one has ever been!</span>
                                <br/><br/><span className={styles.bold} style={{ textAlign: 'center', display: 'block' }}>LuceoLab declares the maximum love of life, but only on our own terms!</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter( OurBeliefs );
