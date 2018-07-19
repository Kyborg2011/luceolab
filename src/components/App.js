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
import { ToastContainer } from 'react-toastify';
import '../../node_modules/react-toastify/dist/ReactToastify.css';

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
                  htmlAttributes={{ lang: 'en' }}>
                  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimal-ui" />
                  <meta name="apple-mobile-web-app-capable" content="yes" />
                  <meta name="msapplication-TileColor" content="#ffffff" />
                  <meta name="msapplication-TileImage" content={require( '../assets/favicon/ms-icon-144x144.png' )} />
                  <meta name="theme-color" content="#ffffff" />
                  <meta name="copyright" content="Copyright © LuceoLab. All Rights Reserved." />
                  <meta name="author" content="LuceoLab (https://luceolab.com)" />
                  <meta name="robots" content="index, follow" />
                  <meta name="description" content="Hello internet voyager. We are a digital agency LuceoLab. Got a minute? Click on How we work button to learn more about us." />
                  <meta name="twitter:card" content="summary" />
                  <meta name="twitter:title" content="LuceoLab | Arts. Privacy. Clarity. Openness." />
                  <meta name="twitter:description" content="Hello internet voyager. We are a digital agency LuceoLab. Got a minute? Click on How we work button to learn more about us." />
                  <meta name="twitter:image" content={'https://luceolab.com' + require( '../assets/img/logo-icon.png' )} />
                  <meta name="twitter:creator" content="@luceolab" />
                  <meta name="twitter:site" content="@luceolab" />
                  <meta property="og:url" content={'https://luceolab.com' + this.props.location.pathname} />
                  <meta property="og:type" content="website" />
                  <meta property="og:title" content="LuceoLab | Arts. Privacy. Clarity. Openness." />
                  <meta property="og:description" content="Hello internet voyager. We are a digital agency LuceoLab. Got a minute? Click on How we work button to learn more about us." />
                  <meta property="og:site_name" content="Luceolab - Digital Agency" />
                  <meta property="og:image"  content={'https://luceolab.com' + require( '../assets/img/logo-icon.png' )} />
                  <link rel="apple-touch-icon" sizes="57x57" href={require( '../assets/favicon/apple-icon-57x57.png' )}/>
                  <link rel="apple-touch-icon" sizes="60x60" href={require( '../assets/favicon/apple-icon-60x60.png' )}/>
                  <link rel="apple-touch-icon" sizes="72x72" href={require( '../assets/favicon/apple-icon-72x72.png' )}/>
                  <link rel="apple-touch-icon" sizes="76x76" href={require( '../assets/favicon/apple-icon-76x76.png' )}/>
                  <link rel="apple-touch-icon" sizes="114x114" href={require( '../assets/favicon/apple-icon-114x114.png' )}/>
                  <link rel="apple-touch-icon" sizes="120x120" href={require( '../assets/favicon/apple-icon-120x120.png' )}/>
                  <link rel="apple-touch-icon" sizes="144x144" href={require( '../assets/favicon/apple-icon-144x144.png' )}/>
                  <link rel="apple-touch-icon" sizes="152x152" href={require( '../assets/favicon/apple-icon-152x152.png' )}/>
                  <link rel="apple-touch-icon" sizes="180x180" href={require( '../assets/favicon/apple-icon-180x180.png' )}/>
                  <link rel="icon" type="image/png" sizes="192x192" href={require( '../assets/favicon/android-icon-192x192.png' )}/>
                  <link rel="icon" type="image/png" sizes="32x32" href={require( '../assets/favicon/favicon-32x32.png' )}/>
                  <link rel="icon" type="image/png" sizes="96x96" href={require( '../assets/favicon/favicon-96x96.png' )}/>
                  <link rel="icon" type="image/png" sizes="16x16" href={require( '../assets/favicon/favicon-16x16.png' )}/>
                  <link rel="icon" type="image/x-icon" href={require( '../assets/favicon/favicon.ico' )}/>
                  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300|Open+Sans:300,400,600|Josefin+Sans:300,600" />
                  <link rel="stylesheet" href="/css/main.css" />
                </Helmet>
                <Header />
                <Navigation darkstyle={([
                    '/services',
                ].indexOf( pathname ) !== -1 )} />
                <div className={classNames( styles.innerWrapper )}>
                    <Content />
                    {pathname !== '/' &&
                        <VerticalButton darkstyle={([
                            '/team',
                            '/selected-works',
                            '/services',
                        ].indexOf( pathname ) !== -1
                        && typeof isLightstyle !== 'number' )} />
                    }
                </div>
                <Footer />
                <ToastContainer />
            </div>
        );
    }
}

export default withRouter( App );
