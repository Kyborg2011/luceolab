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
                                <p className={styles.epigraph}>
                                    «Such men know to begin with, and then their whole effort is to examine, to enlarge, and to enrich the ephemeral island on which they have just landed» ― Albert Camus
                                </p>
                                <p className={styles.content}>
                                    We see business as a creative act, in which a person who defends the right to his unique universe, free from any framework and limitations, finds its realization.<br/>
                                    The main aspiration of LuceoLab is the clarity of the vision.<br/>
                                    Arguing in this way, we derive four main principles: Arts, Privacy, Clear Workflow, Openness.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default withRouter( OurBeliefs );
