import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { Route } from 'react-router-dom';

import styles from './Content.css';
import Homepage from './pages/Homepage';
import HowWeWork from './pages/HowWeWork';
import Contact from './pages/Contact';
import SelectedWorks from './pages/SelectedWorks';
import OurTeam from './pages/OurTeam';

class Content extends React.Component {
    handleClick( e ) {
        e.preventDefault();
    }
    render() {
        return (
            <div className={styles.mainContent}>
                <Route exact path="/" component={Homepage}/>
                <Route path="/how-we-work" component={HowWeWork}/>
                <Route path="/contacts" component={Contact}/>
                <Route path="/selected-works" component={SelectedWorks}/>
                <Route path="/our-team" component={OurTeam}/>
            </div>
        );
    }
}

export default Content;
