import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import { FormInput, FormButton } from '../../../pageComponents/formFields';

class AccountLoginForm extends Component {
    render() {
        return (
            <div className='login-form-wrapper'>
                <form className='login-form'>
                    <Field className="login-form__email" type="email" title="Email" placeholder="" name="email" component={FormInput} />
                    <Field className="login-form__password" type="password" title="Password" placeholder="" name="password" component={FormInput} />
                    <Field onClick={() => console.log('That submited')} className='login-button' type="login" title="Login" name='Login' component={FormButton} />
                </form>
                <div>
                    <h2>account recovery</h2>
                    <p>Forgot Password?</p>
                </div>
            </div>
        )
    }
}

AccountLoginForm = reduxForm({
    form: 'AccountLoginForm'
})(AccountLoginForm);

export default AccountLoginForm