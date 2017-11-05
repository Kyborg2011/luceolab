import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { Route } from 'react-router-dom';

import styles from './Content.css';
import Homepage from './pages/Homepage';
import HowWeWork from './pages/HowWeWork';

class Content extends React.Component {
    handleClick( e ) {
        e.preventDefault();
    }
    render() {
        return (
            <div className={styles.mainContent}>
                <Route exact path="/" component={Homepage}/>
                <Route path="/how-we-work" component={HowWeWork}/>

            </div>
        );
    }
}

export default Content;
