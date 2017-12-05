import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import {
  withRouter
} from 'react-router-dom';
import classNames from 'classnames';

import 'normalize.css';
import styles from './App.css';
import Header from './header/Header';
import Content from './content/Content';
import Navigation from './aside/Navigation';
import Footer from './footer/Footer';
import VerticalButton from './vertical-button/VerticalButton';

class App extends React.Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    }

    constructor( props ) {
        super( props );
        this.state = {
            pageClassName: styles[ props.location.pathname.replace( '/', 'll_' ) ],
        };
    }

    componentWillReceiveProps( nextProps ) {
        this.setState({
            pageClassName: styles[ nextProps.location.pathname.replace( '/', 'll_' ) ]
        });
    }

    render() {
        const { pageClassName } = this.state;

        return (
            <div className={styles.wrapper}>
                <Header />
                <Navigation />
                <div className={classNames( styles.backgroundWrapper, pageClassName )}>
                    <Content />
                    <Footer />
                    {this.props.location.pathname !== '/' &&
                        <VerticalButton darkstyle={([
                            '/our-team',
                            '/selected-works',
                        ].indexOf( this.props.location.pathname ) !== -1 )} />
                    }
                </div>
            </div>
        );
    }
}

export default App;
