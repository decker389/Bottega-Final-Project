import React, { Component } from 'react';
import { reduxForm, Field } from "redux-form";


import { FormButton } from "../../../../components/pageComponents/formFields";
import history from '../../../history';





class AccountCreationButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loggedIn: true
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        history.push('/accountcreation')

    }

    render() {
        return (
            <div>
                <form className="on-off">
                    <Field className="on-off-button" onClick={this.handleClick} type='button' title="off/on" name='Off/on' component={FormButton} />
                </form>
            </div >
        )
    }
}

AccountCreationButton = reduxForm({
    form: 'AccountCreationButton'
})(AccountCreationButton);

export default AccountCreationButton;
