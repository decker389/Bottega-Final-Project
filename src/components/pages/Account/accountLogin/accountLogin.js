import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../../actions'
import PageTitle from '../../../pageComponents/pageTitle';
import LoginForm from './accountLoginForm';

class Accountlogin extends Component {

    onSubmit = (fields) => {
        this.props.logUserIn(fields);
    }

    render() {
        return (
            <div className='page-container'>
                <PageTitle className='account-login__page-title' title='Account Login' />
                <LoginForm onSubmit={this.onSubmit} />
            </div>
        )
    }
}

Accountlogin = connect(null, actions)(Accountlogin)
export default Accountlogin;