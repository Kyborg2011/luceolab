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

// we need to map the `scale` prop we define below
// to the transform style property
function mapStyles( styles ) {
    return {
        opacity: styles.opacity,
        transform: `scale(${styles.scale})`,
    };
}

// wrap the `spring` helper to use a bouncy config
function bounce( val ) {
    return spring( val, {
        stiffness: 330,
        damping: 22,
    });
}

// child matches will...
const bounceTransition = {
  // start in a transparent, upscaled state
    atEnter: {
        opacity: 0,
        scale: 1.2,
    },
  // leave in a transparent, downscaled state
    atLeave: {
        opacity: bounce( 0 ),
        scale: bounce( 0.8 ),
    },
  // and rest at an opaque, normally-scaled state
    atActive: {
        opacity: bounce( 1 ),
        scale: bounce( 1 ),
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
