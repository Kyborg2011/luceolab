import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {
  withRouter
} from 'react-router-dom';

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

    handleClick( e ) {
        e.preventDefault();
    }

    render() {
        return (
                <div>
                    <MainHeading darkstyle text="our beliefs" />
                    <div className={layout.pageWrapper}>
                        <div className={styles.inner}>
                            <div className={styles.slide}>
                                <p className={styles.content}>
                                    LuceoLab - from the very beginning was between two seemingly heterogeneous aspirations. On the one hand, it is the desire to create the most advanced Internet projects, digital experience in general. On the other hand, it is literature, poetry, the achievement of a free flight of thought, of a free style of life through art.<br/><br/>
                                    Luceolab is an attempt to combine classical art, rooted in the past, with Internet technologies located on the very edge of the modern world.<br/><br/>
                                    This organization was created as a writer could write his novel ... Or, perhaps, a philosophical essay ... As a unique style of thought, as an experiment. Finally, as an absolute statement of life!<br/><br/>
                                    What is our mission? Continually open up new approaches in digital technologies, especially in everything connected with the Internet.<br/>
                                    We find ecstasy only in moving forward, motion without stopping, however, with the appointment. We want to get into a city in which no one has ever been!
                                </p>
                                <p className={styles.epigraph}>
                                    «Such men know to begin with, and then their whole effort is to examine, to enlarge, and to enrich the ephemeral island on which they have just landed» ― Albert Camus
                                </p>
                            </div>
                            <div className={styles.controls}>
                                <a href="#">
                                    <i className="fa fa-chevron-circle-left" aria-hidden="true" />
                                </a>
                                <a href="#">
                                    <i className="fa fa-chevron-circle-right" aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default withRouter( OurBeliefs );
