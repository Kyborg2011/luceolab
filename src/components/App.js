import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import {
  withRouter
} from 'react-router-dom';
import classNames from 'classnames';
import ClassesOfPages from '../configs/ClassesOfPages';

import 'normalize.css';
import styles from './App.css';
import Header from './header/Header';
import Content from './content/Content';
import Navigation from './aside/Navigation';
import Footer from './footer/Footer';

class App extends React.Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    }

    constructor( props ) {
        super( props );
        this.state = {
            pageClassName: ClassesOfPages[ props.location.pathname ],
        };
    }

    render() {
        const { pageClassName } = this.state;

        return (
            <div className={styles.wrapper}>
                <Header />
                <Navigation />
                <div className={classNames( styles.backgroundWrapper, styles[ pageClassName ])}>
                    <Content />
                    <Footer />
                </div>
            </div>
        );
    }
}

export default App;
