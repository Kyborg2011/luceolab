import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {
  withRouter
} from 'react-router-dom';

import styles from './MouseNavigation.css';

class MouseNavigation extends React.Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    }

    static wrapperId = 'mouse-navigation-wrapper'
    static routes = [
        '/',
        '/how-we-work',
        '/services',
        '/our-team',
        '/contacts',
    ]

    componentDidMount() {
        let redirectTimeoutId = null;
        let startX = -1;
        let endX = 0;
        let element = document.getElementById( MouseNavigation.wrapperId );

        element.addEventListener( 'wheel', ( e ) => {
            /* old IE support */
            e = window.event || e;
	        let delta = Math.max( -1, Math.min( 1, ( e.wheelDelta || -e.detail )));
            let routeId = MouseNavigation.routes.indexOf( this.props.location.pathname );
            let nextRouteId = routeId - delta;
            if ( MouseNavigation.routes.length > nextRouteId && nextRouteId != -1 ) {
                clearTimeout( redirectTimeoutId );
                redirectTimeoutId = setTimeout(() => {
                    this.props.history.push( MouseNavigation.routes[ nextRouteId ]);
                }, 250 );
            }
        });
        element.addEventListener( 'mousedown', ( e ) => {
            startX = e.pageY;
        }, false );
        element.addEventListener( 'mouseup', ( e ) => {
            endX = e.pageY;
            if ( startX != -1 ) {
                let delta = endX - startX;
                if ( Math.abs( delta ) > 50 ) {
                    let routeId = MouseNavigation.routes.indexOf( this.props.location.pathname );
                    let nextRouteId = routeId;
                    if ( delta > 0 ) {
                        nextRouteId = routeId - 1;
                    } else {
                        nextRouteId = routeId + 1;
                    }
                    if ( MouseNavigation.routes.length > nextRouteId && nextRouteId != -1 ) {
                        clearTimeout( redirectTimeoutId );
                        redirectTimeoutId = setTimeout(() => {
                            this.props.history.push( MouseNavigation.routes[ nextRouteId ]);
                        }, 250 );
                    }
                }
            }
            startX = -1;
        }, false );
    }

    render() {
        return (
            <div className={classNames( MouseNavigation.wrapperId, styles.backLining )} id={MouseNavigation.wrapperId}>
                {this.props.children}
            </div>
        );
    }
}

export default withRouter( MouseNavigation );
