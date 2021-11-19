import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import { FormInput } from '../../../formFields';

class AccountCreationForm extends Component {
    render() {

        const { handleSubmit } = this.props;

        return (
            <form className="creation-form" onSubmit={handleSubmit}>

                <Field className="creation-form__first-name" type="name" title="First Name:" placeholder="First Name" name="firstName" component={FormInput} required />

                {/* <Field className="creation-form__last-name">
                    <label>Last Name:</label>
                    <input name="lastName" required />
                </Field>

                <div className="creation-form__email">
                    <label>Email Address:</label>
                    <input name="emailAddress" required />
                </div>

                <div className="creation-form__password">
                    <label>Password:</label>
                    <input type="password" name="password" required />
                </div>

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

                </div> */}

                <div className='submit-button'>
                    <input type="submit" value="Create Account" onSubmit="" />
                </div>

            </form>
        )
    }
}

AccountCreationForm = reduxForm({
    form: 'AccountCreationForm'
})(AccountCreationForm);

export default AccountCreationForm