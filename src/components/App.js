import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import classNames from 'classnames';
import { Helmet } from 'react-helmet';

import 'normalize.css';
import '../../node_modules/font-awesome/css/font-awesome.css';
import styles from './App.css';

import Header from './header/Header';
import Content from './content/Content';
import Navigation from './aside/Navigation';
import Footer from './footer/Footer';
import VerticalButton from './vertical-button/VerticalButton';

class App extends React.Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    }

    constructor( props ) {
        super( props );
        this.state = {
            pathname: props.location.pathname,
            isLightstyle: false,
        };
    }

    componentWillReceiveProps( nextProps ) {
        if ( nextProps.location.pathname != this.props.location.pathname ) {
            if ( process.env.BROWSER ) {
                window.changedPath = {
                    prev: this.props.location.pathname,
                    curr: nextProps.location.pathname,
                };
            }
            this.setState({
                isLightstyle: 1,
                pathname: nextProps.location.pathname
            });
            setTimeout(() => {
                this.setState({
                    isLightstyle: false,
                });
            }, 2000 );
        }
    }

    render() {
        const { pathname, isLightstyle } = this.state;

        return (
            <div className={styles.wrapper}>
                <Helmet
                  htmlAttributes={{ lang: 'en' }}
                  meta={[
                      { name: 'apple-mobile-web-app-capable', content: 'yes' },
                      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, minimal-ui' },
                  ]}
                />
                <Header />
                <Navigation darkstyle={([
                    '/services',
                ].indexOf( pathname ) !== -1 )} />
                <div className={classNames( styles.innerWrapper )}>
                    <Content />
                    {pathname !== '/' &&
                        <VerticalButton darkstyle={([
                            '/our-team',
                            '/selected-works',
                            '/services',
                        ].indexOf( pathname ) !== -1
                        && typeof isLightstyle !== 'number' )} />
                    }
                </div>
                <Footer />
            </div>
        );
    }
}

export default withRouter( App );
