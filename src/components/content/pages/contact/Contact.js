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
                      title="Contacts | LuceoLab"
                    />
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
                                Lorem ipsum dolor sit amet,<br />
                                consectetur adipisicing elit
                            </p>
                            <p><span className="fa fa-mobile" /><a href="tel:+380936905361">+38 (093) 690-5361</a></p>
                            <p><span className="fa fa-envelope-o" /><a href="mailto:info@luceolab.com">info@luceolab.com</a></p>
                            <ul className={styles.socialNetworks}>
                                <li className={styles.facebookBtn}><a href="#" target="_blank"><span className="fa fa-facebook" /></a></li>
                                <li><a href="#" target="_blank"><span className="fa fa-instagram" /></a></li>
                                <li className={styles.facebookBtn}><a href="#" target="_blank"><span className="fa fa-twitter" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
        );
    }
}

export default withRouter( Contact );
