import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {
  withRouter,
  Link
} from 'react-router-dom';

import styles from './Homepage.css';
import bgStyles from '../../../shared/styles/Background.css';
import largeLogo from '../../../../assets/img/homepage-logo-large.png';
import Button from '../../../button/Button';
import SwingingLogo from '../../SwingingLogo';

class Homepage extends React.Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    }

    constructor( props ) {
        super( props );
        this.state = {
            pageClassName: bgStyles[ props.location.pathname.replace( '/', 'll_' ) ],
            blurred: true,
            cancelBlur: false,
            swingingLogo: true,
        };
    }

    componentWillReceiveProps( nextProps ) {
        this.setState({ swingingLogo: false });
    }

    render() {
        const { pageClassName, blurred, cancelBlur, swingingLogo } = this.state;

        return (
            <div className={classNames( styles.homepageInner )}>
                <div>
                    <div className={styles.largeLogo}>
                        <img src={largeLogo} alt="LuceoLab" />
                    </div>
                    <SwingingLogo animation={swingingLogo}
                      onEnd={() => {
                          this.setState({ blurred: false })
                      }}
                      onCancelAnimation={() => {
                          this.setState({ cancelBlur: true });
                      }}
                    />
                    <div id="homepage-blurred" className={classNames({ 'blurred': !cancelBlur, 'unblur': !blurred })}>
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
