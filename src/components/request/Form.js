import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import emitter from '../shared/utils/mrEmitter';
import Select from 'react-select';
import { toast } from 'react-toastify';
import Input from 'muicss/lib/react/input';
import Textarea from 'muicss/lib/react/textarea';
import Button from '../button/Button';
import LdsGear from '../animation/LdsGear';
import 'react-select/dist/react-select.css';
import 'muicss/dist/css/mui.css';
import styles from './Form.css';

function validateEmail( email ) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test( email );
}

var openTimeout = null;

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
            isMobile: false,
            isModalActive: '',
            isLoading: false,
            formData: {
                name: '',
                email: '',
                type: 'Site',
                description: '',
            },
            formValidation: {
                name: false,
                email: false,
            }
        };
        this.handleSelectChange = this.handleSelectChange.bind( this );
        this.open = this.open.bind( this );
        this.onChange = this.onChange.bind( this );
        this.onSubmit = this.onSubmit.bind( this );
    }

    componentWillReceiveProps( nextProps ) {
        this.setState({
            backgroundColor: nextProps.backgroundColor,
            label: nextProps.label,
        });
    }

    componentWillMount() {
        this.eventToken = emitter.addListener( 'request', this.open );
    }

    componentWillUnmount() {
        this.eventToken.remove();
    }

    handleSelectChange( selectValue ) {
        let formData = this.state.formData;
        formData.type = selectValue;
        this.setState({ formData });
    }

    onChange( ev ) {
        let formData = this.state.formData;
        formData[ ev.target.name ] = ev.target.value;
        this.setState({ formData });
    }

    onSubmit( e ) {
        if ( process.env.BROWSER ) {
            const request = require( 'superagent' );
            var formData = this.state.formData;
            var formValidation = {
                name: false,
                email: false,
            };
            if ( !formData.name ) {
                formValidation.name = true;
            }
            if ( !validateEmail( formData.email )) {
                formValidation.email = true;
            }
            if ( !formValidation.name && !formValidation.email ) {
                request.post( '/send-request' )
                    .set( 'Content-Type', 'application/json' )
                    .send( formData )
                    .then(( res ) => {
                        this.setState({ isLoading: false });
                        formData.name = '';
                        formData.email = '';
                        formData.description = '';
                        setTimeout(() => {
                            this.setState({
                                isRemoveOverlay: true,
                                isClosed: false,
                            });
                        }, 2000 );
                        this.setState({ isOpen: false, isClosed: true });
                        toast.success( 'Thank you! Our manager will contact you as soon as possible', {
                            position: toast.POSITION.TOP_RIGHT
                        });
                    });
                this.setState({ isLoading: true });
                formValidation.name = false;
                formValidation.email = false;
            }
            this.setState({ formValidation });
        }
        e.preventDefault();
    }

    open() {
        if ( process.env.BROWSER ) {
            let width = ( window.innerWidth > 0 ) ? window.innerWidth : screen.width;
            if ( width < 767 ) {
                this.setState({
                    isOpen: true,
                    isModalActive: styles.activeModal,
                    isMobile: true,
                    isRemoveOverlay: true,
                });
            } else {
                this.setState({
                    isOpen: true,
                    isClosed: false,
                    isRemoveOverlay: false,
                });
            }
        }
    }

    render() {
        const { backgroundColor, isLoading, label, isOpen, isClosed, isRemoveOverlay, selectValue, isMobile, isModalActive } = this.state;

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
                        if ( openTimeout == null ) {
                            if ( isOpen ) {
                                setTimeout(() => {
                                    this.setState({
                                        isRemoveOverlay: true,
                                        isClosed: false,
                                    });
                                }, 2000 );
                            } else {
                                this.setState({
                                    isRemoveOverlay: false,
                                });
                            }
                            this.setState({ isOpen: ( isOpen ) ? false : true, isClosed: ( isOpen ) ? true : false });
                            openTimeout = setTimeout(() => {
                                openTimeout = null;
                            }, 2000 );
                        }
                        e.preventDefault();
                    }} />
                    {( isOpen ) && (
                        <div className={styles.formWrapper}>
                            {( this.state.formValidation.name || this.state.formValidation.email ) && (
                                <p style={{ color: '#D81159', fontWeight: 400, position: 'relative', textAlign: 'center' }}>
                                    Please check the correctness of the entered data.
                                </p>
                            )}
                            <form className={styles.reverseForm}>
                                <Select
                                  options={[
                                      { label: 'Site', value: 'Site' },
                                      { label: 'Only UI Design', value: 'Only UI Design' },
                                      { label: 'Only Development', value: 'Only Development' },
                                      { label: 'Concept Design', value: 'Concept Design' },
                                      { label: 'Digital Marketing', value: 'Digital Marketing' },
                                  ]}
                                  id="interested-in"
                                  onBlurResetsInput={false}
                                  onSelectResetsInput={false}
                                  onChange={this.handleSelectChange}
                                  simpleValue
                                  clearable={this.state.clearable}
                                  name="interested-in"
                                  placeholder="Interested in ..."
                                  value={this.state.formData.type}
                                />
                                <Input invalid={this.state.formValidation.name} name="name" value={this.state.formData.name} onChange={this.onChange.bind( this )} label="Your name *" floatingLabel />
                                <Input invalid={this.state.formValidation.email} name="email" value={this.state.formData.email} onChange={this.onChange.bind( this )} label="E-mail *" floatingLabel />
                                <Textarea name="description" value={this.state.formData.description} onChange={this.onChange.bind( this )} label="Project description (optional)" floatingLabel />
                                <Button onClick={this.onSubmit} label="send" reverse />
                            </form>
                            {( isLoading ) && (
                                <div className={styles.loader}>
                                    <LdsGear />
                                </div>
                            )}
                        </div>
                    )}
                </div>
                {(( isOpen || isClosed ) && !isRemoveOverlay ) && (
                    <div className={classNames( styles.overlay, { overlayClose: isClosed })} />
                )}
                {( isMobile && isOpen ) && (
                    <div className={classNames( styles.modal, isModalActive )}>
                        <div className={styles.modalContainer}>
                            <a href="" id="close-modal" onClick={( e ) => {
                                e.preventDefault();
                                this.setState({
                                    isModalActive: '',
                                    isRemoveOverlay: true,
                                });
                            }}>
                                <i className="fa fa-times" aria-hidden="true" />
                            </a>
                            <div>
                                {( this.state.formValidation.name || this.state.formValidation.email ) && (
                                    <p style={{ color: '#D81159', fontWeight: 400, position: 'relative', textAlign: 'center' }}>
                                        Please check the correctness of the entered data.
                                    </p>
                                )}
                                <p>
                                    <form className={styles.reverseForm}>
                                        <Select
                                          options={[
                                              { label: 'Site', value: 'Site' },
                                              { label: 'Only UI Design', value: 'Only UI Design' },
                                              { label: 'Only Development', value: 'Only Development' },
                                              { label: 'Concept Design', value: 'Concept Design' },
                                              { label: 'Digital Marketing', value: 'Digital Marketing' },
                                          ]}
                                          id="interested-in"
                                          onBlurResetsInput={false}
                                          onSelectResetsInput={false}
                                          onChange={this.handleSelectChange}
                                          simpleValue
                                          clearable={this.state.clearable}
                                          name="interested-in"
                                          placeholder="Interested in ..."
                                          value={this.state.formData.type}
                                        />
                                        <Input invalid={this.state.formValidation.name} name="name" value={this.state.formData.name} onChange={this.onChange.bind( this )} label="Your name *" floatingLabel />
                                        <Input invalid={this.state.formValidation.email} name="email" value={this.state.formData.email} onChange={this.onChange.bind( this )} label="E-mail *" floatingLabel />
                                        <Textarea name="description" value={this.state.formData.description} onChange={this.onChange.bind( this )} label="Project description (optional)" floatingLabel />
                                        <Button onClick={this.onSubmit} label="send" />
                                        {( isLoading ) && (
                                            <div className={styles.loader}>
                                                <LdsGear />
                                            </div>
                                        )}
                                    </form>
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default Form;
