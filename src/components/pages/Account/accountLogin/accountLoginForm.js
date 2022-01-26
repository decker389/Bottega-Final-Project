import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { NavLink } from 'react-router-dom';

import { FormInput, FormButton } from '../../../pageComponents/formFields';
import shelfImg from '../../../../Static/Images/GamingShelf.jpg';

class AccountLoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loggedIn: false
        };
        this.handleLogIn = this.handleLogIn.bind(this)
    }

    handleLogIn(e) {
        e.preventDefault()
        this.setState({
            loggedIn: true
        })
    }

    render() {

        return (
            <div className='login-form-wrapper'>
                <form className='login-form'>
                    <Field className="login-form__email" type="email" title="Email:" placeholder="" name="email" component={FormInput} />
                    <Field className="login-form__password" type="password" title="Password:" placeholder="" name="password" component={FormInput} />
                    <Field onClick={e => this.handleLogIn(e)} className='login-button' type="login" title="Login" name='Login' component={FormButton} />
                </form>
                <div className='login-page-help-link-wrapper'>
                    <h2>account recovery</h2>
                    <NavLink exact to='/recoverpassword' className='help-link'>Forgot Password?</NavLink>
                    <div className='login-image'
                        style={{
                            height: '100%',
                            width: '70%',
                            background: "url(" + shelfImg + ") no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            display: 'grid',
                            alignSelf: 'center'
                        }}
                    />
                </div>
            </div>
        )
    }
}

AccountLoginForm = reduxForm({
    form: 'AccountLoginForm'
})(AccountLoginForm);

export default AccountLoginForm