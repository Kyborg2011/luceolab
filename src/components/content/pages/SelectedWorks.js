import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

import styles from './SelectedWorks.css';
import Button from '../../button/Button';
import MainHeading from '../main-heading/MainHeading';
import sliderImageTest from '../../../assets/img/slider-image-test.png';
import sliderPrevBtnBg from '../../../assets/img/slider-prev-btn.png';
import sliderNextBtnBg from '../../../assets/img/slider-next-btn.png';

class SelectedWorks extends React.Component {
    handleClick( e ) {
        e.preventDefault();
    }
    render() {
        return (
            <div>
                <MainHeading darkstyle text="selected works" />
                <div className={styles.portfolioWrapper}>
                    <div className={styles.inner}>
                        <h2 className={styles.subTitle}>We create only successful digital progects.</h2>
                        <p className={styles.description}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor. in/reprehenderit in
                        </p>
                        <Button className={styles.visitBtn} label="visit website" reverse />
                    </div>
                    <div className={styles.lensSlider}>
                        <div className={styles.sliderImageWrapper}>
                            <a className={styles.sliderPrevBtn} href="#"><img src={sliderPrevBtnBg} /></a>
                            <img className={'img-circle'} src={sliderImageTest} />
                            <a className={styles.sliderNextBtn} href="#"><img src={sliderNextBtnBg} /></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SelectedWorks;
