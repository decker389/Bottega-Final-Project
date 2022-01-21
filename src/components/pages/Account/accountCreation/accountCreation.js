import React, { Component } from 'react';
import { connect } from 'react-redux';
import { db } from "../../../reducers/initFirebase";

import * as actions from '../../../reducers';
import PageTitle from '../../../pageComponents/pageTitle';
import AccountCreationForm from './accountCreationForm';
import history from '../../../history';

class AccountCreation extends Component {


    onSubmit = (fields) => {
        try {
            history.push('/')
            db.collection('users').doc(fields.emailAddress).set({
                fields
            })
        }
        catch (e) {
            console.log("Creation Error", e);
        }
    }
    render() {
        return (
            <div className='page-container'>
                <PageTitle className='account-creation__page-title' title='Account Creation' />
                <AccountCreationForm onSubmit={this.onSubmit} className='sign-up__form' />
            </div>
        )
    }
}


AccountCreation = connect(null, actions)(AccountCreation)

export default AccountCreation