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
                        <h2 className={layout.subTitle}>
                            Success of your business is the only acceptable result for us!
                        </h2>
                        <p className={styles.description}>
                            Open-mindedness, creativity, incessant self-development - that's what unites us in a single team LuceoLab. We adore new challenges, time after time we fearlessly rush to new heights in the business that we have chosen for ourselves. So, dear friend, let's get acquainted?!
                        </p>
                    </div>
                    <div className={styles.teamMember}>
                        <img src={MemberPhoto1} />
                        <div className={styles.hidden}>
                            <div className={styles.memberInfoWrap}>
                                <span className={styles.memberName}>Ivanov Ivan</span>
                                <span className={styles.memberPosition}>web-developer</span>
                                <ul className={styles.memberSocialLinks}>
                                    <li>
                                        <a href="mailto:example@example.net" title="Mail" target="_blank">
                                            <i className="fa fa-envelope-o" aria-hidden="true" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="Instagram" target="_blank">
                                            <i className="fa fa-instagram" aria-hidden="true" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="Linkedin" target="_blank">
                                            <i className="fa fa-linkedin" aria-hidden="true" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="GitHub" target="_blank">
                                            <i className="fa fa-github" aria-hidden="true" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="Telegram" target="_blank">
                                            <i className="fa fa-telegram" aria-hidden="true" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={styles.teamMember}>
                        <img src={MemberPhoto2} />
                        <div className={styles.hidden}>
                            <div className={styles.memberInfoWrap}>
                                <span className={styles.memberName}>Shever Marina</span>
                                <span className={styles.memberPosition}>account manager</span>
                                <ul className={styles.memberSocialLinks}>
                                    <li>
                                        <a href="mailto:example@example.net" title="Mail">
                                            <i className="fa fa-envelope-o" aria-hidden="true" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="Instagram">
                                            <i className="fa fa-instagram" aria-hidden="true" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="Linkedin">
                                            <i className="fa fa-linkedin" aria-hidden="true" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={styles.teamMember}>
                        <img src={MemberPhoto3} />
                        <div className={styles.hidden}>
                            <div className={styles.memberInfoWrap}>
                                <span className={styles.memberName}>Shever Marina</span>
                                <span className={styles.memberPosition}>graphic designer</span>
                                <ul className={styles.memberSocialLinks}>
                                    <li>
                                        <a href="mailto:example@example.net" title="Mail">
                                            <i className="fa fa-envelope-o" aria-hidden="true" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="Instagram">
                                            <i className="fa fa-instagram" aria-hidden="true" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="Linkedin" target="_blank">
                                            <i className="fa fa-linkedin" aria-hidden="true" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={styles.teamMember}>
                        <img src={MemberPhoto4} />
                        <div className={styles.hidden}>
                            <div className={styles.memberInfoWrap}>
                                <span className={styles.memberName}>Shever Marina</span>
                                <span className={styles.memberPosition}>co-founder</span>
                                <ul className={styles.memberSocialLinks}>
                                    <li>
                                        <a href="mailto:example@example.net" title="Mail" target="_blank">
                                            <i className="fa fa-envelope-o" aria-hidden="true" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="Instagram" target="_blank">
                                            <i className="fa fa-instagram" aria-hidden="true" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="Linkedin" target="_blank">
                                            <i className="fa fa-linkedin" aria-hidden="true" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={styles.teamMember}>
                        <img src={MemberPhoto5} />
                        <div className={styles.hidden}>
                            <div className={styles.memberInfoWrap}>
                                <span className={styles.memberName}>Hren Znaet</span>
                                <span className={styles.memberPosition}>content strategy</span>
                                <ul className={styles.memberSocialLinks}>
                                    <li>
                                        <a href="mailto:example@example.net" title="Mail" target="_blank">
                                            <i className="fa fa-envelope-o" aria-hidden="true" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="Linkedin" target="_blank">
                                            <i className="fa fa-linkedin" aria-hidden="true" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={classNames( styles.teamMember, styles.joinUsBox )}>
                        <Button
                          label="join us"
                          onClick={this.handleClick.bind( this )}
                          dataTooltip={
                                'We are always looking for new talents, so if you know something about projects development and promotion in web - it\'s time to apply, buddy!'
                            }
                          iconOnHover={'fa-suitcase'}
                          reverse
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default OurTeam;
