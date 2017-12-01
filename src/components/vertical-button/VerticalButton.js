import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import {
  Link, withRouter
} from 'react-router-dom';

import styles from './VerticalButton.css';

class VerticalButton extends React.Component {
    render() {
        return (
            <div className={classNames(
                styles.verticalBtn,
                ( this.props.darkstyle ) ? styles.darkstyle : null )}
            >
                <Link to="/">luceolab</Link>
            </div>
        );
    }
}

export default withRouter( VerticalButton );
