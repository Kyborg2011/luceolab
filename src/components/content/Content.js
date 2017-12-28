import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { Route } from 'react-router-dom';
import { spring, AnimatedSwitch } from 'react-router-transition';

import styles from './Content.css';
import Homepage from './pages/Homepage';
import HowWeWork from './pages/HowWeWork';
import Contact from './pages/Contact';
import SelectedWorks from './pages/SelectedWorks';
import OurTeam from './pages/OurTeam';
import Services from './pages/Services';

function mapStyles( styles ) {
    return {
        opacity: styles.opacity,
        transform: `translateY(${styles.offset}%)`,
    };
}

function bounce( val ) {
    return spring( val, {
        damping: 10,
        precision: 0.1,
        stiffness: 175,
    });
}

const bounceTransition = {
    atEnter: {
        opacity: 0,
        offset: 25,
    },
    atLeave: {
        opacity: 0,
        offset: bounce( -25 ),
    },
    atActive: {
        opacity: 1,
        offset: bounce( 0 ),
    },
};

class Content extends React.Component {
    handleClick( e ) {
        e.preventDefault();
    }
    render() {
        return (
            <AnimatedSwitch
              atEnter={bounceTransition.atEnter}
              atLeave={bounceTransition.atLeave}
              atActive={bounceTransition.atActive}
              mapStyles={mapStyles}
              className={styles.mainContent}
             >
                <Route exact path="/" component={Homepage} />
                <Route path="/how-we-work" component={HowWeWork} />
                <Route path="/contacts" component={Contact} />
                <Route path="/selected-works" component={SelectedWorks} />
                <Route path="/our-team" component={OurTeam} />
                <Route path="/services" component={Services} />
            </AnimatedSwitch>
        );
    }
}

export default Content;
