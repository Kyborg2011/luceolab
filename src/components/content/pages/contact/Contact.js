import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {
  withRouter
} from 'react-router-dom';
import Input from 'muicss/lib/react/input';
import Textarea from 'muicss/lib/react/textarea';
import { Helmet } from 'react-helmet';

import styles from './Contact.css';
import bgStyles from '../../../shared/styles/Background.css';
import Button from '../../../button/Button';
import MainHeading from '../../main-heading/MainHeading';

class Contact extends React.Component {
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
                <div>
                    <Helmet
                      title="Contacts - LuceoLab"
                    />
                    <MainHeading text="get in touch" />
                    <div className={styles.contactsWrapper}>
                        <div className={styles.formWrapper}>
                            <form>
                                <Input label="Your name" floatingLabel />
                                <Input label="E-mail" floatingLabel />
                                <Textarea label="Your message" floatingLabel />
                                <Button label="send a message" reverse />
                            </form>
                        </div>
                        <div className={styles.info}>
                            <p>
                                <span className="fa fa-map-marker" />
                                Lorem ipsum dolor sit amet,<br />
                                consectetur adipisicing elit
                            </p>
                            <p><span className="fa fa-mobile" /><a href="tel:+380663794773">+38 (066) 379-4773</a></p>
                            <p><span className="fa fa-envelope-o" /><a href="mailto:info@luceolab.com">info@luceolab.com</a></p>
                            <ul className={styles.socialNetworks}>
                                <li><a href="#" target="_blank"><span className="fa fa-instagram" /></a></li>
                                <li className={styles.facebookBtn}><a href="#" target="_blank"><span className="fa fa-facebook" /></a></li>
                                <li className={styles.telegramBtn}><a href="#" target="_blank" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
        );
    }
}

export default withRouter( Contact );
