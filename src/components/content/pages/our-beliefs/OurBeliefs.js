import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {
  withRouter
} from 'react-router-dom';

import layout from '../../../shared/styles/Layout.css';
import Button from '../../../button/Button';
import MainHeading from '../../main-heading/MainHeading';

class OurBeliefs extends React.Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    }

    handleClick( e ) {
        e.preventDefault();
    }

    render() {
        return (
                <div>
                    <MainHeading darkstyle text="our beliefs" />
                    <div className={layout.pageWrapper}>
                        <div className={layout.inner}>
                            <h2 className={layout.subTitle}>
                                Success of your business is the only acceptable result for us!
                            </h2>
                            <p className={layout.description}>
                                Open-mindedness, creativity, incessant self-development &mdash; that's what unites us in a single team LuceoLab. We adore new challenges, time after time we fearlessly rush to new heights in the business that we have chosen for ourselves. So, dear friend, let's get acquainted?!
                            </p>
                        </div>
                    </div>
                </div>
        );
    }
}

export default withRouter( OurBeliefs );
