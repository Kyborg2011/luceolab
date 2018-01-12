import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Route, withRouter, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

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
/* const selectedWorks = asyncComponent(() => import( './pages/selected-works/index' )); */
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
            pageClassName: bgStyles[ props.location.pathname.replace( '/', 'll_' ) ],
            hideBackground: false,
            transitionDirection: 'bottom-up',
        };
    }

    componentWillReceiveProps( nextProps ) {
        let curPathname = this.props.location.pathname;
        let nextPathname = nextProps.location.pathname;

        if ( curPathname !== nextPathname ) {
            if ( MouseNavigation.routes.indexOf( nextPathname ) > MouseNavigation.routes.indexOf( curPathname )) {
                this.setState({ transitionDirection: 'bottom-up' });
            } else {
                this.setState({ transitionDirection: 'top-down' });
            }
        }
    }

    render() {
        const { pageClassName, hideBackground, transitionDirection } = this.state;

        return (
            <MouseNavigation>
                <div className={classNames( bgStyles.background, pageClassName, { 'hide-smoothly': hideBackground })} />
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
