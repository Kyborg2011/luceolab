import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import styles from './VerticalButton.css';

class VerticalButton extends React.Component {
    render() {
        return (
            <div className={classNames(
                styles.verticalBtn,
                ( this.props.darkstyle ) ? styles.darkstyle : null )}
            >
                <Link to="/" title="LuceoLab - Digital agency">luceolab</Link>
            </div>
        );
    }
}

export default VerticalButton;
