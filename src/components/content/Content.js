import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Route, withRouter, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import bgStyles from '../shared/styles/Background.css';
import styles from './Content.css';
import MouseNavigation from '../animation/MouseNavigation';
import Homepage from './pages/Homepage';
import HowWeWork from './pages/HowWeWork';
import Contact from './pages/Contact';
import SelectedWorks from './pages/SelectedWorks';
import OurTeam from './pages/OurTeam';
import Services from './pages/Services';

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

        if ( MouseNavigation.routes.indexOf( nextPathname ) > MouseNavigation.routes.indexOf( curPathname )) {
            this.setState({ transitionDirection: 'bottom-up' });
        } else {
            this.setState({ transitionDirection: 'top-down' });
        }

        setTimeout(() => {
            this.setState({
                pageClassName: bgStyles[ nextPathname.replace( '/', 'll_' ) ],
                hideBackground: false,
            });
        }, 1500 );
    }

    render() {
        const { pageClassName, hideBackground, transitionDirection } = this.state;

        return (
            <MouseNavigation>
                <div className={classNames( bgStyles.background, pageClassName, { 'hide-smoothly': hideBackground })} />
                <Route render={({ location }) => (
                    <TransitionGroup className={classNames( styles.transitionGroup, transitionDirection )}>
                        <CSSTransition
                          timeout={3000}
                          classNames="slide-transition"
                          mountOnEnter
                          unmountOnExit
                          key={location.pathname}
                          onEnter={() => {
                              this.setState({ hideBackground: true });
                          }}
                        >
                            <Switch key={location.key} location={location}>
                                <Route exact path="/" component={Homepage} />
                                <Route path="/how-we-work" component={HowWeWork} />
                                <Route path="/contacts" component={Contact} />
                                <Route path="/selected-works" component={SelectedWorks} />
                                <Route path="/our-team" component={OurTeam} />
                                <Route path="/services" component={Services} />
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                )} />
            </MouseNavigation>
        );
    }
}

export default withRouter( Content );
