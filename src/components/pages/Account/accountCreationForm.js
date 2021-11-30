import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import { FormInput } from '../../../formFields';

class AccountCreationForm extends Component {
    render() {

        const { handleSubmit } = this.props;

        return (
            <form className="creation-form" onSubmit={handleSubmit}>

                <Field className="creation-form__first-name" type="firstname" title="First Name:" placeholder="First Name" name="firstName" component={FormInput} required={true} />

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

                <div className='submit-button'>
                    <input type="submit" value="Create Account" />
                </div>

            </form>
        )
    }
}

AccountCreationForm = reduxForm({
    form: 'AccountCreationForm'
})(AccountCreationForm);

export default AccountCreationForm