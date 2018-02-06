import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

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
        '/our-beliefs',
        '/contacts',
    ]
    static redirectTimeoutId = null

    constructor( props ) {
        super( props );
        this.redirect = this.redirect.bind( this );
    }

    redirect( nextRouteId ) {
        if ( MouseNavigation.routes.length > nextRouteId && nextRouteId != -1 && !MouseNavigation.redirectTimeoutId ) {
            clearTimeout( MouseNavigation.redirectTimeoutId );
            MouseNavigation.redirectTimeoutId = setTimeout(() => {
                this.props.history.push( MouseNavigation.routes[ nextRouteId ]);
                setTimeout(() => {
                    MouseNavigation.redirectTimeoutId = null;
                }, 2000 );
            }, 250 );
        }
    }

    componentDidMount() {
        let startX = -1;
        let endX = 0;
        let element = document.getElementById( MouseNavigation.wrapperId );

        /* Mouse wheel scroll event handler for desktops and laptops */
        element.addEventListener( 'wheel', ( e ) => {
            e.preventDefault();
            /* old IE support */
            e = window.event || e;
	        let delta = Math.max( -1, Math.min( 1, ( e.wheelDelta || -e.detail )));
            let routeId = MouseNavigation.routes.indexOf( this.props.location.pathname );
            let nextRouteId = routeId - delta;
            this.redirect( nextRouteId );
        });

        /* Mouse move events handlers for desktops and laptops */
        element.addEventListener( 'mousedown', ( e ) => {
            e.preventDefault();
            startX = e.pageY;
        }, false );
        element.addEventListener( 'mouseup', ( e ) => {
            endX = e.pageY;
            if ( startX != -1 ) {
                let delta = endX - startX;
                if ( Math.abs( delta ) > 75 ) {
                    let routeId = MouseNavigation.routes.indexOf( this.props.location.pathname );
                    let nextRouteId = routeId;
                    nextRouteId = ( delta > 0 ) ? --routeId : ++routeId;
                    this.redirect( nextRouteId );
                }
            }
            startX = -1;
        }, false );

        /* Touch events handlers for mobile devices and tablets */
        element.addEventListener( 'touchmove', ( e ) => {
            e.preventDefault();
        });
        element.addEventListener( 'touchstart', ( e ) => {
            var touch = e.touches[ 0 ] || e.changedTouches[ 0 ];
            startX = touch.pageY;
        }, false );
        element.addEventListener( 'touchend', ( e ) => {
            var touch = e.touches[ 0 ] || e.changedTouches[ 0 ];
            endX = touch.pageY;
            if ( startX != -1 ) {
                let delta = endX - startX;
                if ( Math.abs( delta ) > 50 ) {
                    let routeId = MouseNavigation.routes.indexOf( this.props.location.pathname );
                    let nextRouteId = routeId;
                    nextRouteId = ( delta > 0 ) ? --routeId : ++routeId;
                    this.redirect( nextRouteId );
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
