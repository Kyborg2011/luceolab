import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import styles from './Button.css';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            label: props.label,
            reverse: typeof props.reverse !== 'undefined' ? true : false,
            onClick: props.onClick,
        };
    }

    render() {
        const { label, reverse, onClick } = this.state;

        return (
            <a href="#" title={label} className={classNames(styles.btn, (reverse) ? styles.reverse : null)}>{label}</a>
        );
    }
}

export default Button;
