import React, { Component } from 'react';

import PageTitle from '../../../pageComponents/pageTitle';
import LoginForm from './accountLoginForm';

class Accountlogin extends Component {
    render() {
        return (
            <div className='account-login-wrapper'>
                <PageTitle className='account-login__page-title' title='Account login' />
                <LoginForm />
            </div>
        )
    }
}

export default Accountlogin;