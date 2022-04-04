import React, { Component } from "react";
import { connect } from 'react-redux';

import * as actions from '../../../reducers';
import PageTitle from '../../../pageComponents/pageTitle';
//import history from '../../../history';



class AccountDashboard extends Component {
    render() {
        return (
            <div className="page-container" >
                <PageTitle className='page-title' title='account dashboard' />

            </div>
        )
    }
}

AccountDashboard = connect(null, actions)(AccountDashboard)

export default AccountDashboard