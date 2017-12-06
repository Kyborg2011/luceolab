import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

import layout from '../../shared/styles/Layout.css';
import styles from './Services.css';
import Button from '../../button/Button';
import MainHeading from '../main-heading/MainHeading';

class Services extends React.Component {
    handleClick( e ) {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <MainHeading darkstyle text="services" />
                <div className={layout.pageWrapper}>
                    <div className={layout.inner}>
                        <h2 className={layout.subTitle}>
                            Test of the subtitle
                        </h2>
                        <p className={layout.description}>
                            Test of the main description
                        </p>
                    </div>

                </div>
            </div>
        );
    }
}

export default Services;
