import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {
  withRouter
} from 'react-router-dom';
import { Helmet } from 'react-helmet';

import layout from '../../../shared/styles/Layout.css';
import bgStyles from '../../../shared/styles/Background.css';
import styles from './OurTeam.css';
import Button from '../../../button/Button';
import MainHeading from '../../main-heading/MainHeading';

import MemberPhoto1 from '../../../../assets/img/team-portrait-1.png';
import MemberPhoto2 from '../../../../assets/img/team-portrait-2.png';
import MemberPhoto3 from '../../../../assets/img/team-portrait-3.png';
import MemberPhoto4 from '../../../../assets/img/team-portrait-4.png';
import MemberPhoto5 from '../../../../assets/img/team-portrait-5.png';

class OurTeam extends React.Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    }

    constructor( props ) {
        super( props );
        this.state = {
            pageClassName: bgStyles[ props.location.pathname.replace( '/', 'll_' ) ],
        };
    }

    handleClick( e ) {
        e.preventDefault();
    }

    render() {
        const { pageClassName } = this.state;

        return (
                <div>
                    <Helmet
                      title="Our Team | LuceoLab"
                    >
                        <meta name="description" content="LuceoLab - Our Team" />
                    </Helmet>
                    <MainHeading darkstyle text="nature born climbers" />
                    <div className={styles.pageWrapper}>
                        <div className={styles.inner}>
                            <p className={styles.description}>
                                Open-mindedness, creativity, incessant self-development &mdash; that's what unites us in a single team LuceoLab. We adore new challenges, time after time we fearlessly rush to new heights in the business that we have chosen for ourselves. So, dear friend, let's get acquainted?!
                            </p>
                        </div>
                        <div className={styles.teamMember}>
                            <img src={MemberPhoto1} alt="Anton Babinin" />
                            <div className={styles.hidden}>
                                <div className={styles.memberInfoWrap}>
                                    <span className={styles.memberName}>Anton Babinin</span>
                                    <span className={styles.memberPosition}>CEO & Founder</span>
                                    <ul className={styles.memberSocialLinks}>
                                        <li>
                                            <a href="mailto:anton.babinin@luceolab.com" title="Mail" target="_blank">
                                                <i className="fa fa-envelope-o" aria-hidden="true" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/antonbabinin/" title="Instagram" target="_blank">
                                                <i className="fa fa-instagram" aria-hidden="true" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/in/anton-babinin-a09000a6" title="Linkedin" target="_blank">
                                                <i className="fa fa-linkedin" aria-hidden="true" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://github.com/Kyborg2011" title="GitHub" target="_blank">
                                                <i className="fa fa-github" aria-hidden="true" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="http://t.me/kyborg2011" title="Telegram" target="_blank">
                                                <i className="fa fa-telegram" aria-hidden="true" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={styles.teamMember}>
                            <img src={MemberPhoto2} alt="Bohdan Chych" />
                            <div className={styles.hidden}>
                                <div className={styles.memberInfoWrap}>
                                    <span className={styles.memberName}>Bohdan Chych</span>
                                    <span className={styles.memberPosition}>graphic designer</span>
                                    <ul className={styles.memberSocialLinks}>
                                        <li>
                                            <a href="https://www.instagram.com/bohdan.chych/" title="Instagram">
                                                <i className="fa fa-instagram" aria-hidden="true" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={styles.teamMember}>
                            <img src={MemberPhoto3} alt="Olga Stanislavova" />
                            <div className={styles.hidden}>
                                <div className={styles.memberInfoWrap}>
                                    <span className={styles.memberName}>Olga Stanislavova</span>
                                    <span className={styles.memberPosition}>account manager</span>
                                    <ul className={styles.memberSocialLinks}>
                                        <li>
                                            <a href="mailto:olya.stanis@luceolab.com" title="Mail">
                                                <i className="fa fa-envelope-o" aria-hidden="true" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={styles.teamMember}>
                            <img src={MemberPhoto4} alt="Alexey Peleshenko" />
                            <div className={styles.hidden}>
                                <div className={styles.memberInfoWrap}>
                                    <span className={styles.memberName}>Alexey Peleshenko</span>
                                    <span className={styles.memberPosition}>content strategy</span>
                                    <ul className={styles.memberSocialLinks}>
                                        <li>
                                            <a href="https://www.instagram.com/peleshenkoa/" title="Instagram" target="_blank">
                                                <i className="fa fa-instagram" aria-hidden="true" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={styles.teamMember}>
                            <img src={MemberPhoto5} alt="Marina Shever" />
                            <div className={styles.hidden}>
                                <div className={styles.memberInfoWrap}>
                                    <span className={styles.memberName}>Marina Shever</span>
                                    <span className={styles.memberPosition}>marketer</span>
                                </div>
                            </div>
                        </div>
                        <div className={classNames( styles.teamMember, styles.joinUsBox )}>
                            <p className={styles.morrisonQuote}>
                                We are not constant<br />
                                We are an arrow in flight!
                            </p>
                            <Button
                              onClick={( e ) => {
                                  if ( process.env.BROWSER ) {
                                      window.location.href = 'mailto:info@luceolab.com';
                                  }
                                  e.preventDefault();
                              }}
                              label="join us"
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

export default withRouter( OurTeam );
