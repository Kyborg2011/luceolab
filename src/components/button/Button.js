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
            dataTooltip: props.dataTooltip,
            iconOnHover: props.iconOnHover,
            fontAwesomeIcon: props.fontAwesomeIcon,
        };
    }

    componentWillReceiveProps( nextProps ) {
        this.setState({
            label: nextProps.label,
        });
    }

    render() {
        const { label, reverse, dataTooltip, iconOnHover, fontAwesomeIcon } = this.state;

        let btnEl = (
            <a href="#"
              title={label}
              className={classNames( styles.btn, this.props.className, ( reverse ) ? styles.reverse : null )}
              onClick={this.props.onClick}
            >
                {label}
                {( typeof fontAwesomeIcon !== 'undefined' ) && (
                    <i className={classNames( 'fa', 'fa-' + fontAwesomeIcon )} aria-hidden="true" />
                )}
            </a>
        );

        if ( typeof dataTooltip !== 'undefined' ) {
            btnEl = (
                <a href="#"
                  title={label}
                  className={classNames( styles.btn, styles.withTooltip, this.props.className, ( reverse ) ? styles.reverse : null )}
                  onClick={this.props.onClick}
                  data-tooltip={dataTooltip}
                >
                    <span className={styles.textWrapper}>
                        <span className={styles.btnTextValue}>{label}</span>
                        <span className={styles.btnIcon}>
                            <i className={classNames( 'fa', iconOnHover )} aria-hidden="true" />
                        </span>
                    </span>
                </a>
            );
        }

        return btnEl;
    }
}

export default Button;
