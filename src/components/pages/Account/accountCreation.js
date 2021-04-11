import React, { Component } from 'react';

import PageTitle from '../../pageComponents/pageTitle';

export default class AccountCreation extends Component {
    render() {
        return (
            <div className='account-creation-wrapper'>
                <PageTitle className='account-creation__page-title' title='Account Creation' />
            </div>
        )
    }
}