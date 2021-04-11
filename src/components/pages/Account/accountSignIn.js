import React, { Component } from 'react';

import PageTitle from '../../pageComponents/pageTitle';

class AccountSignIn extends Component {
    render() {
        return (
            <div className='account-signin-wrapper'>
                <PageTitle className='account-signin__page-title' title='Account SignIn' />
            </div>
        )
    }
}

export default AccountSignIn;