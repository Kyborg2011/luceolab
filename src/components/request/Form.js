import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import Select from 'react-select';
import Button from '../button/Button';
import styles from './Form.css';

class Form extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            label: props.label,
            backgroundColor: props.backgroundColor,
            isOpen: false,
            isClosed: false,
            selectValue: null,
        };
        this.handleSelectChange = this.handleSelectChange.bind( this );
    }

    componentWillReceiveProps( nextProps ) {
        this.setState({
            backgroundColor: nextProps.backgroundColor,
            label: nextProps.label,
        });
    }

    componentDidMount() {

    }

    handleSelectChange( selectValue ) {
		    this.setState({ selectValue });
	  }

    render() {
        const { backgroundColor, label, isOpen, isClosed, selectValue } = this.state;

        const mainClasses = () => {
            let classes = {};
            if ( isOpen ) {
                classes[ styles.openForm ] = true;
            }
            if ( isClosed ) {
                classes[ styles.closeForm ] = true;
            }
            return classes;
        };

        return (
            <div>
                <div className={classNames( styles.requestForm, mainClasses())}>
                    <Button backgroundColor={backgroundColor} className={styles.requestBtn} label={label} onClick={( e ) => {
                        this.setState({ isOpen: ( isOpen ) ? false : true, isClosed: ( isOpen ) ? true : false });
                        e.preventDefault();
                    }} />
                    {( isOpen ) && (
                        <div className={styles.formWrapper}>
                            <form className={styles.reverseForm}>
                                <Select
                                  options={[
                                      { label: 'Mobile app', value: 'Mobile app' },
                                      { label: 'Site', value: 'Site' },
                                      { label: 'Only UI Design', value: 'Only UI Design' },
                                      { label: 'Only Development', value: 'Only Development' },
                                      { label: 'Concept Design', value: 'Concept Design' },
                                  ]}
                                  id="interested-in"
                                  onBlurResetsInput={false}
                                  onSelectResetsInput={false}
                                  onChange={this.handleSelectChange}
                                  simpleValue
                                  clearable={this.state.clearable}
                                  name="interested-in"
                                  placeholder="Interested in ..."
                                  value={selectValue}
                                />
                                <input type="text" name="full-name" placeholder="Your name" />
                                <input type="text" name="email" placeholder="Email" />
                                <textarea placeholder="Project description (optional)" />
                                <Button label="send" reverse />
                            </form>
                        </div>
                    )}
                </div>
                {( isOpen || isClosed ) && (
                    <div className={classNames( styles.overlay, { overlayClose: isClosed })} />
                )}
            </div>
        );
    }
}

export default Form;
