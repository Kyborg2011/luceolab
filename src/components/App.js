import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
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
            pathname: props.location.pathname,
            isLightstyle: false,
        };
    }

    componentWillReceiveProps( nextProps ) {
        this.setState({
            isLightstyle: 1,
            pathname: nextProps.location.pathname
        });
        setTimeout(() => {
            this.setState({
                isLightstyle: false,
            });
        }, 3000 );
    }

    render() {
        const { pathname, isLightstyle } = this.state;

        return (
            <div className={styles.wrapper}>
                <Header />

                <div className={classNames( styles.innerWrapper )}>
                    <Content />
                    {pathname !== '/' &&
                        <VerticalButton darkstyle={([
                            '/our-team',
                            '/selected-works',
                            '/services',
                        ].indexOf( pathname ) !== -1
                        && typeof isLightstyle !== 'number' )} />
                    }
                </div>

                <Navigation />
                <Footer />
            </div>
        );
    }
}

export default App;
