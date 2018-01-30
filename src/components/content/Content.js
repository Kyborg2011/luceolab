import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Route, withRouter, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import LazyLoad from 'react-lazyload';

import MouseNavigation from '../animation/MouseNavigation';
import asyncComponent from './AsyncComponent';

import bgStyles from '../shared/styles/Background.css';
import styles from './Content.css';

const home = asyncComponent(() => import(
    /* webpackChunkName: 'homepage' */
    './pages/home/Homepage'
));
const howWeWork = asyncComponent(() => import(
    /* webpackChunkName: 'how-we-work' */
    './pages/how-we-work/HowWeWork'
));
const services = asyncComponent(() => import(
    /* webpackChunkName: 'services' */
    './pages/services/Services'
));
const ourTeam = asyncComponent(() => import(
    /* webpackChunkName: 'our-team' */
    './pages/our-team/OurTeam'
));
const contact = asyncComponent(() => import(
    /* webpackChunkName: 'contact' */
    './pages/contact/Contact'
));

class Content extends React.Component {
    handleClick( e ) {
        e.preventDefault();
    }

    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    }

    constructor( props ) {
        super( props );
        this.state = {
            hideBackground: false,
            transitionDirection: 'bottom-up',
            backgroundImagesPrefix: props.location.pathname.replace( '/', '' ),
            backgroundHeight: 0,
        };
    }

    componentWillReceiveProps( nextProps ) {
        let curPathname = this.props.location.pathname;
        let nextPathname = nextProps.location.pathname;

        if ( curPathname !== nextPathname ) {
            setTimeout(() => {
                this.setState({
                    backgroundImagesPrefix: nextProps.location.pathname.replace( '/', '' ),
                });
            }, 900 );

            if ( MouseNavigation.routes.indexOf( nextPathname ) > MouseNavigation.routes.indexOf( curPathname )) {
                this.setState({ transitionDirection: 'bottom-up' });
            } else {
                this.setState({ transitionDirection: 'top-down' });
            }
        }
    }

    componentDidMount() {
        let backgroundHeight = document.getElementById( MouseNavigation.wrapperId ).clientHeight;
        this.setState({ backgroundHeight });
    }

    render() {
        const {
            hideBackground,
            transitionDirection,
            backgroundImagesPrefix,
            backgroundHeight,
        } = this.state;

        let bgPicture = ( <picture /> );
        try {
            bgPicture = (
                <LazyLoad height={backgroundHeight}>
                    <picture>
                        <source media="(max-width: 767px)" sizes="(max-width: 874px) 100vw, 874px"
                          srcSet={
                              require( '../../assets/img/backgrounds/' + backgroundImagesPrefix + '-bg--w_874.jpg' ) + ' 874w'
                          } />
                        <source media="(min-width: 768px) and (max-width: 991px)"
                          sizes="(max-width: 1530px) 100vw, 1530px"
                          srcSet={[
                              require( '../../assets/img/backgrounds/' + backgroundImagesPrefix + '-bg--w_768.jpg' ) + ' 768w',
                              require( '../../assets/img/backgrounds/' + backgroundImagesPrefix + '-bg--w_1192.jpg' ) + ' 1192w',
                              require( '../../assets/img/backgrounds/' + backgroundImagesPrefix + '-bg--w_1530.jpg' ) + ' 1530w'
                          ].join( ',' )} />
                        <source media="(min-width: 992px) and (max-width: 1199px)" sizes="(max-width: 1147px) 100vw, 1147px"
                          srcSet={[
                              require( '../../assets/img/backgrounds/' + backgroundImagesPrefix + '-bg--w_992.jpg' ) + ' 992w',
                              require( '../../assets/img/backgrounds/' + backgroundImagesPrefix + '-bg--w_1099.jpg' ) + ' 1099w',
                              require( '../../assets/img/backgrounds/' + backgroundImagesPrefix + '-bg--w_1147.jpg' ) + ' 1147w'
                          ].join( ',' )} />
                        <img sizes="(max-width: 3626px) 100vw, 3626px"
                          srcSet={[
                              require( '../../assets/img/backgrounds/' + backgroundImagesPrefix + '-bg--w_1200.jpg' ) + ' 1200w',
                              require( '../../assets/img/backgrounds/' + backgroundImagesPrefix + '-bg--w_2618.jpg' ) + ' 2618w',
                              require( '../../assets/img/backgrounds/' + backgroundImagesPrefix + '-bg--w_3626.jpg' ) + ' 3626w'
                          ].join( ',' )}
                          src={
                              require( '../../assets/img/backgrounds/' + backgroundImagesPrefix + '-bg--w_3626.jpg' )
                          } />
                      </picture>
                  </LazyLoad>
             );
        } catch ( e ) {
            console.log( e );
        }

        return (
            <MouseNavigation>
                <div className={classNames( bgStyles.background, { 'hide-smoothly': hideBackground })}>
                    {bgPicture}
                </div>
                <Route render={({ location }) => (
                    <TransitionGroup className={classNames( styles.transitionGroup, transitionDirection )}>
                        <CSSTransition
                          timeout={2500}
                          classNames="slide-transition"
                          mountOnEnter
                          unmountOnExit
                          key={location.pathname}
                          onEntering={() => {
                              this.setState({ hideBackground: true });
                              setTimeout(() => {
                                  this.setState({
                                      pageClassName: bgStyles[ this.props.location.pathname.replace( '/', 'll_' ) ],
                                      hideBackground: false,
                                  });
                              }, 1000 );
                          }}
                        >
                            <Switch key={location.key} location={location}>
                                <Route exact path="/" component={home} />
                                <Route path="/how-we-work" component={howWeWork} />
                                <Route path="/services" component={services} />
                                <Route path="/our-team" component={ourTeam} />
                                <Route path="/contacts" component={contact} />
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                )} />
            </MouseNavigation>
        );
    }
}

export default withRouter( Content );
