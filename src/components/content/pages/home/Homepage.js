import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {
  withRouter,
  Link
} from 'react-router-dom';
import { Helmet } from 'react-helmet';

import styles from './Homepage.css';
import bgStyles from '../../../shared/styles/Background.css';
import Button from '../../../button/Button';
import SwingingLogo from '../../../animation/SwingingLogo';

class Homepage extends React.Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    }

    constructor( props ) {
        super( props );
        this.state = {
            blurred: true,
            cancelBlur: false,
            swingingLogo: true,
        };
    }

    componentWillReceiveProps( nextProps ) {
        this.setState({ swingingLogo: false });
    }

    render() {
        const {
            blurred,
            cancelBlur,
            swingingLogo,
        } = this.state;

        return (
            <div className={classNames( styles.homepageInner )}>
                <Helmet
                  title="LuceoLab - digital agency"
                />
                <div>
                    <SwingingLogo
                      animation={swingingLogo}
                      onEnd={() => {
                          this.setState({ blurred: false })
                      }}
                      onCancelAnimation={() => {
                          this.setState({ cancelBlur: true });
                      }}
                    />

                    <div id="homepage-blurred" className={
                        classNames({
                            'blurred': !cancelBlur,
                            'unblur': !blurred
                        })
                    }>
                        <h1 className={classNames( styles.homepageMainPhrase )}>
                            The digital agency that<br />makes things clear
                        </h1>
                        <Button href="/how-we-work" label="How we work" hasMouseWheel />
                    </div>

                </div>
            </div>
        );
    }
}

export default withRouter( Homepage );
