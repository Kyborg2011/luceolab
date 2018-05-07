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
        };
    }

    componentWillReceiveProps( nextProps ) {
        this.setState({
            backgroundColor: nextProps.backgroundColor,
            label: nextProps.label,
        });
    }

    componentDidMount() {

    }

    render() {
        const { backgroundColor, label, isOpen } = this.state;

        const mainClasses = () => {
            let classes = {};
            if ( isOpen ) {
                classes[ styles.openForm ] = true;
            }
            return classes;
        };

        return (
            <div className={classNames( styles.requestForm, mainClasses())}>
                <Button backgroundColor={backgroundColor} className={styles.requestBtn} label={label} onClick={( e ) => {
                    this.setState({ isOpen: true });
                    e.preventDefault();
                }} />
                {( isOpen ) && (
                    <div className={styles.formWrapper}>
                        <form className={styles.reverseForm}>
                            <Select
                              options={[
                                  { label: 'Mobile app', value: 'Mobile app' },
                                  { text: 'Site', value: 'Site' },
                                  { text: 'Only UI Design', value: 'Only UI Design' },
                                  { text: 'Only Development', value: 'Only Development' },
                                  { text: 'Concept Design', value: 'Concept Design' },
                              ]}
                              noResultsText="Interested in ..."
                            />
                            <input type="text" name="full-name" placeholder="Your name" />
                            <input type="text" name="email" placeholder="Email" />
                            <textarea placeholder="Project description (optional)" />
                            <Button label="send" reverse />
                        </form>
                    </div>
                )}
            </div>
        );
    }
}

export default Form;
