import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {
  withRouter
} from 'react-router-dom';
import { toast } from 'react-toastify';
import Input from 'muicss/lib/react/input';
import Textarea from 'muicss/lib/react/textarea';
import { Helmet } from 'react-helmet';

import styles from './Contact.css';
import bgStyles from '../../../shared/styles/Background.css';
import Button from '../../../button/Button';
import MainHeading from '../../main-heading/MainHeading';

function validateEmail( email ) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test( email );
}

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
            formData: {
                name: '',
                email: '',
                description: '',
            },
            formValidation: {
                name: false,
                email: false,
                description: false,
            }
        };
        this.onChange = this.onChange.bind( this );
        this.onSubmit = this.onSubmit.bind( this );
    }

    onChange( ev ) {
        let formData = this.state.formData;
        formData[ ev.target.name ] = ev.target.value;
        this.setState({ formData });
    }

    onSubmit( e ) {
        e.preventDefault();
        if ( process.env.BROWSER ) {
            const request = require( 'superagent' );
            var formData = this.state.formData;
            var formValidation = this.state.formValidation;
            if ( !formData.name || !formData.description ) {
                formValidation.name = true;
                toast.error( 'Please check the correctness of the entered data. All fields are required!', {
                    position: toast.POSITION.TOP_RIGHT
                });
            } else if ( !validateEmail( formData.email )) {
                formValidation.email = true;
                toast.error( 'Please check the correctness of the entered data. All fields are required!', {
                    position: toast.POSITION.TOP_RIGHT
                });
            } else {
                request.post( '/send-request' )
                    .set( 'Content-Type', 'application/json' )
                    .send( formData )
                    .then(( res ) => {
                        formData.name = '';
                        formData.email = '';
                        formData.description = '';
                        toast.success( 'Thank you! Our manager will contact you as soon as possible', {
                            position: toast.POSITION.TOP_RIGHT
                        });
                        this.setState({ formData });
                    });
                formValidation.name = false;
                formValidation.email = false;
            }
            this.setState({ formValidation });
        }
    }

    handleClick( e ) {
        e.preventDefault();
    }

    render() {
        const { pageClassName } = this.state;

        return (
                <div>
                    <Helmet
                      title="Contact | LuceoLab"
                    >
                        <meta name="description" content="What are you looking for? Drop us a line or contact us wherever you were." />
                    </Helmet>
                    <MainHeading text="get in touch" />
                    <div className={styles.contactsWrapper}>
                        <div className={styles.formWrapper}>
                            <form>
                                <Input invalid={this.state.formValidation.name} name="name" value={this.state.formData.name} onChange={this.onChange.bind( this )} label="Your name" floatingLabel />
                                <Input invalid={this.state.formValidation.email} name="email" value={this.state.formData.email} onChange={this.onChange.bind( this )} label="E-mail" floatingLabel />
                                <Textarea name="description" value={this.state.formData.description} onChange={this.onChange.bind( this )} label="Your message" floatingLabel />
                                <Button onClick={this.onSubmit} label="send a message" reverse />
                            </form>
                        </div>
                        <div className={styles.info}>
                            <p>
                                <span className="fa fa-map-marker" />
                                5, Kosmonavta Komarova Av.<br />
                                Kyiv, 03058<br/>
                                Ukraine<br/>
                            </p>
                            <p><span className="fa fa-mobile" /><a href="tel:+380936905361">+38 (093) 690-5361</a></p>
                            <p><span className="fa fa-envelope-o" /><a href="mailto:info@luceolab.com">info@luceolab.com</a></p>
                            <ul className={styles.socialNetworks}>
                                <li className={styles.facebookBtn}>
                                    <a href="#" target="_blank">
                                        <svg viewBox="0 0 24 23"><path fill="inherit" d="M16.5,0 L7.4,0 C3.8,0 0.9,2.9 0.9,6.5 L0.9,15.6 C0.9,19.2 3.8,22.1 7.4,22.1 L16.5,22.1 C20.1,22.1 23,19.2 23,15.6 L23,6.5 C23,2.9 20.1,0 16.5,0 Z M21,15.5 C21,18 19,20 16.5,20 L14,20 L14,12 L17,12 L17,10 L14,10 L14,9 C14,7.9 14.9,7 16,7 L18,7 L18,5 L16,5 C13.8,5.1 12,6.8 12,9 L12,10 L10,10 L10,12 L12,12 L12,20 L7.5,20 C5,20 3,18 3,15.5 L3,6.4 C3,3.9 5,1.9 7.5,1.9 L16.6,1.9 C19.1,1.9 21.1,3.9 21.1,6.4 L21.1,15.5 L21,15.5 Z" /> </svg>
                                    </a>
                                </li>
                                <li><a href="#" target="_blank"><span className="fa fa-instagram" /></a></li>
                                <li className={styles.facebookBtn}>
                                    <a href="#" target="_blank">
                                        <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 23 20">
                                            <path d="M15.4,1.7c0.9,0,1.8,0.4,2.3,1.2L18,3.5l0.5,0.1l-0.3,0.1l0.1,1.2v0.6c0,6.2-3,12.9-11.3,12.9c-0.9,0-1.7-0.1-2.5-0.3c0.8-0.2,1.5-0.6,2.2-1c0.7-0.5,1.2-1.3,1.2-2.1s-0.5-1.7-1.2-2.1C4.1,11.3,2.3,8.8,1.7,6C1.5,5.2,1.6,4.3,1.9,3.5c2.2,2.1,5,3.5,8,3.9h0.4c0.6,0,1.2-0.2,1.6-0.7c0.5-0.5,0.7-1.2,0.6-1.9v0C12.4,3.2,13.7,1.7,15.4,1.7L15.4,1.7zM15.4,0.1c-2.6,0.1-4.6,2.2-4.5,4.8c0,0.3,0.2,1-0.6,1h-0.2C6.7,5.4,3.7,3.6,1.6,0.9c-3.8,4.2-0.4,10.5,4.1,13.1c0.3,0.2,0.4,0.5,0.4,0.8S6,15.4,5.8,15.6c-1.7,1-3.7,1.5-5.6,1.2c1.7,2.1,4.2,3.2,6.9,3.1c9.5,0,12.9-7.7,12.9-14.5V4.8C21.4,4.3,22,2.3,22,1.3C21.3,1.8,20.4,2,19.6,2c-0.2,0-0.4,0-0.6,0C18.2,0.8,16.8,0,15.4,0.1L15.4,0.1z"/>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
        );
    }
}

export default withRouter( Contact );
