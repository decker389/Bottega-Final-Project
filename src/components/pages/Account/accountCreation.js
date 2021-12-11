import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebase } from "../../reducers/initFirebase";

import * as actions from '../../reducers';
import PageTitle from '../../pageComponents/pageTitle';
import AccountCreationForm from './accountCreationForm';

class AccountCreation extends Component {


    onSubmit = (fields) => {
        try {
            const db = firebase.database();
            const account = db.ref("accounts");
            const newAccountRef = account.push(fields);
            newAccountRef.set({
                fields
            });
        }
        catch (e) {
            console.log("Creation Error", e);
        }
    }
    render() {
        return (
            <div className='account-creation-wrapper'>
                <PageTitle className='account-creation__page-title' title='Account Creation' />
                <AccountCreationForm onSubmit={this.onSubmit} className='sign-up__form' />
            </div>
        )
    }
}


AccountCreation = connect(null, actions)(AccountCreation)

export default AccountCreation