import React, { Component } from 'react';

import PageTitle from '../../../pageComponents/pageTitle';
import LoginForm from './accountLoginForm';

class AccountSignIn extends Component {
    render() {
        return (
            <div className='account-signin-wrapper'>
                <PageTitle className='account-signin__page-title' title='Account SignIn' />
                <LoginForm />
            </div>
        )
    }
}

export default AccountSignIn;