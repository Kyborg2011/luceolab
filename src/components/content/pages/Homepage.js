import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {
  withRouter
} from 'react-router-dom';

import styles from './Homepage.css';
import bgStyles from '../../shared/styles/Background.css';
import largeLogo from '../../../assets/img/homepage-logo-large.png';
import Button from '../../button/Button';
import SwingingLogo from '../SwingingLogo';

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
        };
    }

    handleClick( e ) {
        e.preventDefault();
    }

    render() {
        const { pageClassName } = this.state;

        return (
            <div className={classNames( styles.homepageInner, bgStyles.background, pageClassName )}>
                <div>
                    <div className={styles.largeLogo}>
                        <img src={largeLogo} alt="LuceoLab" />
                    </div>
                    <SwingingLogo blur={'homepage-blurred'} />
                    <div id="homepage-blurred" className="blurred">
                        <h1 className={classNames( styles.homepageMainPhrase )}>
                            The digital agency that<br />makes things clear
                        </h1>
                        <Button label="How we work" reverse onClick={this.handleClick.bind( this )} />
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter( Homepage );
