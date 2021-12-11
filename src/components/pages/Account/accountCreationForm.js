import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import { FormInput, FormButton } from '../../pageComponents/formFields';
import history from 'history';

class AccountCreationForm extends Component {
    render() {

        const { handleSubmit } = this.props;
        const { className } = this.props;
        //const required = value => (value || typeof value === 'number' ? undefined : 'Required')

        return (
            <form className={` ${className} creation-form`} onSubmit={handleSubmit}>

                <Field className="creation-form__first-name" type="firstname" title="First Name:" placeholder="First Name" name="firstName" component={FormInput} />

                <Field className="creation-form__last-name" type="lastname" title="Last Name:" placeholder="Last Name" name="lastName" component={FormInput} required />

                <Field className="creation-form__email" type="email" title="Email Address:" placeholder="Email Address" name="emailAddress" component={FormInput} required />

                <Field className="creation-form__password" type="password" title="Password:" placeholder="" name="password" component={FormInput} required />

                <div className="creation-form-middle-border">
                    <p>First Name, Last Name, Email Address, and Password are required. You can add your bank account information later.</p>
                </div>

                <div className="creation-form__bank-account-info">
                    <div className="creation-form__bank-account-info__bank-account-name">
                        <label>Bank Account Name:</label>
                        <input name="bankAccountName" />
                    </div>

                    <div className="creation-form__bank-account-info__bank-account-type">
                        <label>Bank Account Type:</label>
                        <select >
                            <option value="Checking">Checking</option>
                            <option value="Savings">Savings</option>
                        </select>
                    </div>

                    <div className="creation-form__bank-account-info__bank-account-routing-number">
                        <label>Bank Routing Number:</label>
                        <input name="bankRoutingNumber" />
                    </div>

                    <div className="creation-form__bank-account-info__bank-account-number">
                        <label>Bank Account Number:</label>
                        <input name="bankAccountNumber" />
                    </div>

                </div>
                <Field className='submit-button' type="submit" title="Create Account" name='Create Account' component={FormButton} />
            </form>
        )
    }
}

AccountCreationForm = reduxForm({
    form: 'AccountCreationForm'
})(AccountCreationForm);

export default AccountCreationForm