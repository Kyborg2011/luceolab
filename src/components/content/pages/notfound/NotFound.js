import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {
  withRouter,
  Link
} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import styles from './NotFound.css';
import Button from '../../../button/Button';

class NotFound extends React.Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    }

    constructor( props ) {
        super( props );
    }

    render() {
        return (
            <div className={classNames( styles.NotFoundInner )}>
                <Helmet
                  title="Page not found | LuceoLab" />
                <div>
                    <div>
                        <h1 className={classNames( styles.NotFoundMainPhrase )}>
                            404: Page not found!
                        </h1>
                        <Button href="/" label="Return to home" />
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter( NotFound );
