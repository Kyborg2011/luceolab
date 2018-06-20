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
        };
    }

    handleClick( e ) {
        e.preventDefault();
    }

    render() {
        const { currentSlide, isRight } = this.state;

        const getClassNames = ( id ) => {
            let className = '';

            if ( !isRight && id > currentSlide || isRight && id > currentSlide ) {
                className += styles.right + ' ';
            }
            if ( id == currentSlide ) {
                className = styles.active;
            }

            return className;
        };

        const titles = [
            'introduction',
            'clarity of vision',
            'art',
            'privacy',
            'openness',
        ];

        return (
                <div>
                    <Helmet
                      htmlAttributes={{ lang: 'en' }}
                      title="Our Beliefs - LuceoLab"
                      titleAttributes={{ itemprop: 'name', lang: 'en' }}
                      meta={[
                            { name: 'description', content: 'Our Beliefs - LuceoLab' },
                            { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, minimal-ui' },
                      ]}
                    />
                    <MainHeading darkstyle text="our beliefs" subTitle={titles[ currentSlide ]} />
                    <div className={layout.pageWrapper}>
                        <div className={styles.inner}>
                            <div className={classNames( styles.slide, getClassNames( 0 ))}>
                                <p className={styles.content}>
                                    LuceoLab is a company between two unrelated aspirations.<br/><br/>
                                    On the one hand, it is the desire to create the most advanced digital projects.
                                    On the other hand, it is a tendency to write novels, poetry,
                                    or generally the achievement of a free flight of thought, of a
                                    free style of life through art.<br/><br/>
                                    LuceoLab is an attempt to combine classical art, rooted in the past,
                                    with Internet technologies belonging to the edge of modern ideas and
                                    styles of thought.<br/><br/>
                                    <span className={styles.bold}>What is our mission? Continually open up new approaches in digital technologies,
                                    especially in everything connected with the Internet.</span><br/><br/>
                                    We find ecstasy only in moving forward, motion without stopping, however,
                                    with the appointment. <span className={styles.bold}>We want to get into a city in which no one has ever been!</span>
                                </p>
                                <p className={styles.epigraph}>
                                    «Such men know to begin with, and then their whole effort is to examine, to enlarge, and to enrich the ephemeral island on which they have just landed»<br/><br/>― Albert Camus
                                </p>
                            </div>
                            <div className={classNames( styles.slide, getClassNames( 1 ))}>
                                <p className={styles.content}>
                                    The character of LuceoLab is enclosed
                                    in the name itself, which comes from "luceo" (latin) ― I dawn, become light, become clear.
                                    It's all about clarity of vision, about seeing things as they are.<br/><br/>
                                    Everyone talks about effective trade on the Internet ― this is not enough for us.
                                    We take it higher, we talk about our life, in all its diversity.<br/><br/>
                                    Often, business is reduced to profit, to numbers, to rational.
                                    But is our life reduced to purely rational, to dry logic? Definitely not.<br/><br/>
                                    All that we need is the clarity of vision. <span className={styles.bold}>Business for us is not just part of the modern culture of production and consumption,
                                    but a creative act in which a person is able to claim his own unique universe, free from all limitations.</span><br/><br/>
                                </p>
                                <p className={styles.epigraph}>
                                    «Such men know to begin with, and then their whole effort is to examine, to enlarge, and to enrich the ephemeral island on which they have just landed»<br/><br/>― Albert Camus
                                </p>
                            </div>
                            <div className={classNames( styles.slide, getClassNames( 2 ))}>
                                <p className={styles.content}>
                                    In search of clarity, we find art as the most effective school of patience and clarity. Creativity requires daily effort, self-mastery, an accurate assessment of the boundaries of truth, requires action and strength.<br/><br/>
                                    We believe that a website can be not only a container for some piece of art, but in itself is a unique modern kind of art.  <span className={styles.bold}>A browser window can be turned into anything:
                                    the theatrical scene,
                                    the painter's canvas,
                                    the page from the writer's diary...</span><br/><br/>
                                    In our products, we strive to reflect the full spectrum of human feelings. Digital experience should become a holiday of existence, like the sunrise, the arrival of the long-awaited spring... Or generally become the absolute "Yes!" to the life.<br/><br/>
                                    LuceoLab is an attempt to resurrect the ancient Greek tragedy in the modern world, with the help of wide possibilities of digital experience!
                                </p>
                                <p className={styles.epigraph}>
                                    «We have art in order not to die of the truth»<br/><br/>― Friedrich Nietzsche
                                </p>
                            </div>
                            <div className={classNames( styles.slide, getClassNames( 3 ))}>
                                <p className={styles.content}>
                                    The next conclusion, which we derive from the clarity of vision, is freedom ― as the source of beauty, the source of any art.<br/><br/>
                                    We believe Internet is the unique tool that allows you to maintain maximum personal freedom, using some anonymization methods.
                                    In our work, we regularly use modern methods of achieving privacy in the Internet, such as: Tor network, VPN connections, SSL certificates, PGP, cryptography, and much more.<br/><br/>
                                    Moreover, in the principles of the modern cryptocurrencies we see one of the most important direction of our activities in the nearest future. Therefore, we will be extremely pleased to work with new blockchain-startups! Feel free to write us!
                                    <a href="https://www.blockchain.com/" target="_blank">
                                        <img src={require( '../../../../assets/img/icons/bc.svg' )} />
                                    </a>
                                    <a href="https://bitcoin.org" target="_blank">
                                        <img src={require( '../../../../assets/img/icons/btc.svg' )} />
                                    </a>
                                </p>
                                <p className={styles.epigraph}>
                                    «Freedom is the source of beauty»<br/><br/>― Albert Camus
                                </p>
                            </div>
                            <div className={classNames( styles.slide, getClassNames( 4 ))}>
                                <p className={styles.content}>
                                    It's all about preserving clarity in a world where the nebula reigns.
                                    Indeed, the sense of deception, the manipulation of consciousness today is strongly manifested throughout the world.
                                    We claim that the Internet is the only technology that can give us the
                                    maximum number of points of view, the primary source of any information. <br/><br/>
                                    Combining all these beliefs, we get the concept of creative solutions striving for the maximum freedom. Firstly, freedom in our workflow, in the interaction between our clients and company. Secondly, freedom in effort to freely disseminate the results of our work. We truly love Open Source! <br/> <br/>
                                    <span className={styles.bold}>LuceoLab inevitably strives to constantly increase the diversity in the world, its development and transformation. <br/><br/>LuceoLab declares the maximum love of life, but only on our own terms!</span>
                                </p>
                                <p className={styles.epigraph}>
                                    «Task: to see things as they are. Means: to look at them with a hundred eyes, from many persons»<br/><br/>― Friedrich Nietzsche
                                </p>
                            </div>
                            <div className={styles.controls}>
                                {( currentSlide != 0 ) && (
                                    <a className={styles.backBtn} href="#" title="Back" onClick={( e ) => {
                                        this.setState({
                                            currentSlide: this.state.currentSlide - 1,
                                            isRight: true,
                                        });
                                        e.preventDefault();
                                    }}>
                                        <i className="fa fa-chevron-circle-left" aria-hidden="true" />
                                    </a>
                                )}
                                {( currentSlide != 4 ) && (
                                    <a className={styles.forwardBtn} href="" title="Read more" onClick={( e ) => {
                                        this.setState({
                                            currentSlide: this.state.currentSlide + 1,
                                            isRight: false,
                                        });
                                        e.preventDefault();
                                    }}>
                                        <i className="fa fa-chevron-circle-right" aria-hidden="true" />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default withRouter( OurBeliefs );
