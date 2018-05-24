import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import Select from 'react-select';
import Input from 'muicss/lib/react/input';
import Textarea from 'muicss/lib/react/textarea';
import Button from '../button/Button';

import 'react-select/dist/react-select.css';
import 'muicss/dist/css/mui.css';
import styles from './Form.css';

class Form extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            label: props.label,
            backgroundColor: props.backgroundColor,
            isOpen: false,
            isClosed: false,
            isRemoveOverlay: false,
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
        const { backgroundColor, label, isOpen, isClosed, isRemoveOverlay, selectValue } = this.state;

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
                    <div className={styles.requestFormOpacityBg}/>
                    <Button backgroundColor={backgroundColor} className={styles.requestBtn} label={label} onClick={( e ) => {
                        if ( isOpen ) {
                            setTimeout(() => {
                                this.setState({
                                    isRemoveOverlay: true,
                                });
                            }, 1000 );
                        } else {
                            this.setState({
                                isRemoveOverlay: false,
                            });
                        }
                        this.setState({ isOpen: ( isOpen ) ? false : true, isClosed: ( isOpen ) ? true : false });
                        e.preventDefault();
                    }} />
                    {( isOpen ) && (
                        <div className={styles.formWrapper}>
                            <form className={styles.reverseForm}>
                                <Select
                                  options={[
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
                                <Input label="Your name" floatingLabel />
                                <Input label="E-mail" floatingLabel />
                                <Textarea label="Project description (optional)" floatingLabel />
                                <Button label="send" reverse />
                            </form>
                        </div>
                    )}
                </div>
                {( isOpen || isClosed && !isRemoveOverlay ) && (
                    <div className={classNames( styles.overlay, { overlayClose: isClosed })} />
                )}
            </div>
        );
    }
}

export default Form;
