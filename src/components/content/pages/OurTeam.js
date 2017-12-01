import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

import layout from '../../shared/styles/Layout.css';
import styles from './OurTeam.css';
import Button from '../../button/Button';
import MainHeading from '../main-heading/MainHeading';

import MemberPhoto1 from '../../../assets/img/team-portrait-1.png';
import MemberPhoto2 from '../../../assets/img/team-portrait-2.png';
import MemberPhoto3 from '../../../assets/img/team-portrait-3.png';
import MemberPhoto4 from '../../../assets/img/team-portrait-4.png';
import MemberPhoto5 from '../../../assets/img/team-portrait-5.png';

class OurTeam extends React.Component {
    handleClick( e ) {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <MainHeading darkstyle text="our best team" />
                <div className={styles.pageWrapper}>
                    <div className={styles.inner}>
                        <h2 className={layout.subTitle}>We create only successful digital progects.</h2>
                    </div>
                    <div className={styles.teamMember}>
                        <img src={MemberPhoto1} />
                    </div>
                    <div className={styles.teamMember}>
                        <img src={MemberPhoto2} />
                    </div>
                    <div className={styles.teamMember}>
                        <img src={MemberPhoto3} />
                    </div>
                    <div className={styles.teamMember}>
                        <img src={MemberPhoto4} />
                    </div>
                    <div className={styles.teamMember}>
                        <img src={MemberPhoto5} />
                    </div>
                    <div className={styles.teamMember}>test</div>
                </div>
            </div>
        );
    }
}

export default OurTeam;
