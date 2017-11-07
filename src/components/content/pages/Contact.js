import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

import styles from './Contact.css';
import Button from '../../button/Button';
import MainHeading from '../main-heading/MainHeading';

class Contact extends React.Component {
    handleClick( e ) {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <MainHeading text="get in touch" />
                <div className={styles.contactsWrapper}>
                    <div className={styles.formWrapper}>
                        <form>
                            <input type="text" placeholder="name" />
                            <input type="text" placeholder="e-mail" />
                            <textarea placeholder="your message" />
                            <Button label="send a message" reverse />
                        </form>
                    </div>
                    <div className={styles.info}>
                        <p>
                            <span className="fa fa-map-marker" />
                            Lorem ipsum dolor sit amet,<br />
                            consectetur adipisicing elit
                        </p>
                        <p><span className="fa fa-mobile" /><a href="tel:+380939605361">+380 93 960 5361</a></p>
                        <p><span className="fa fa-envelope-o" /><a href="mailto:info@luceolab.com">info@luceolab.com</a></p>
                        <ul className={styles.socialNetworks}>
                            <li><a href="#" target="_blank"><span className="fa fa-instagram" /></a></li>
                            <li><a href="#" target="_blank"><span className="fa fa-facebook" /></a></li>
                            <li><a href="#" target="_blank"><span className="fa fa-telegram" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
