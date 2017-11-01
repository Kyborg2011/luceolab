import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import styles from './Button.css';

class Button extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            label: props.label,
            reverse: typeof props.reverse !== 'undefined' ? true : false,
        };
    }

    render() {
        const { label, reverse } = this.state;

        return (
            <a href="#"
              title={label}
              className={classNames( styles.btn, this.props.className, ( reverse ) ? styles.reverse : null )}
              onClick={this.props.onClick}
            >
                {label}
            </a>
        );
    }
}

export default Button;
