import React, { Component } from 'react';

import PageTitle from '../../pageComponents/pageTitle';
import AccountCreationForm from './accountCreationForm';

export default class AccountCreation extends Component {
    render() {
        return (
            <div className='account-creation-wrapper'>
                <PageTitle className='account-creation__page-title' title='Account Creation' style={{ justifyContent: "center" }} />
                <AccountCreationForm />
            </div>
        )
    }
}