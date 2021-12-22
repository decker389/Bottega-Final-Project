import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import { FormInput, FormButton } from '../../../pageComponents/formFields';

class AccountCreationForm extends Component {
    render() {

        const { handleSubmit } = this.props;
        const { className } = this.props;

        return (
            <form className={` ${className} creation-form`} onSubmit={handleSubmit} >

                <Field className="creation-form__first-name" type="firstname" title="First Name:" placeholder="First Name" name="firstName" component={FormInput} isRequired={true} />

                <Field className="creation-form__last-name" type="lastname" title="Last Name:" placeholder="Last Name" name="lastName" component={FormInput} isRequired={true} />

                <Field className="creation-form__email" type="email" title="Email Address:" placeholder="Email Address" name="emailAddress" component={FormInput} isRequired={true} />

                <Field className="creation-form__password" type="password" title="Password:" placeholder="" name="password" component={FormInput} isRequired={true} />

                <div className="creation-form-middle-border">
                    <p>First Name, Last Name, Email Address, and Password are required. You can add your bank account information later.</p>
                </div>

                <div className="creation-form__bank-account-info">
                    <Field className="creation-form__bank-account-name" type="bankAccountName" title="Bank Account Name:" placeholder="" name="bankAccountName" component={FormInput} />

                    <div className="creation-form__bank-account-info__bank-account-type">
                        <label>Bank Account Type:</label>
                        <select >
                            <option value="Checking">Checking</option>
                            <option value="Savings">Savings</option>
                        </select>
                    </div>
                    <Field className="creation-form__bank-account-routing-number" type="bankAccountRoutingNumber" title="Bank Account Routing Number:" placeholder="" name="bankRoutingNumber" component={FormInput} />
                    <Field className="creation-form__bank-account-number" type="bankAccountNumber" title="Bank Account Number:" placeholder="" name="bankAccountNumber" component={FormInput} />

                </div>
                <Field onClick={() => console.log('That submited')} className='submit-button' type="submit" title="Create Account" name='Create Account' component={FormButton} />
            </form >
        )
    }
}

AccountCreationForm = reduxForm({
    form: 'AccountCreationForm'
})(AccountCreationForm);

export default AccountCreationForm