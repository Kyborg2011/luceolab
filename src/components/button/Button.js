import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
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
            href: props.href || '',
        };
    }

    componentWillReceiveProps( nextProps ) {
        this.setState({
            label: nextProps.label,
        });
    }

    render() {
        const { label, reverse, dataTooltip, iconOnHover, fontAwesomeIcon, href } = this.state;

        let btnEl = (
            <Link to={href}
              title={label}
              className={classNames( styles.btn, this.props.className, ( reverse ) ? styles.reverse : null )}
              onClick={this.props.onClick}
            >
                {label}
                {( typeof fontAwesomeIcon !== 'undefined' ) && (
                    <i className={classNames( 'fa', 'fa-' + fontAwesomeIcon )} aria-hidden="true" />
                )}
            </Link>
        );

        if ( typeof dataTooltip !== 'undefined' ) {
            btnEl = (
                <Link to={href}
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
                </Link>
            );
        }

        return btnEl;
    }
}

export default Button;
