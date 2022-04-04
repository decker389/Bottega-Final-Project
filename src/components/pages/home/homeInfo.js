import React, { Component } from 'react';
import { reduxForm } from "redux-form";


import GeneralLoggedIn from './LoggedIn/GeneralLoggedIn';
import LoggingOff from './LoggedIn/LoggingOff';
import AccountCreationButton from './NotLoggedIn/AccountCreationButton';
import GeneralNotLoggedIn from './NotLoggedIn/GeneralNotLoggedIn';





class HomeInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loggedIn: false
        };

    }



    render() {
        const { loggedIn } = this.state;
        return (
            <div>
                {loggedIn === true ? <GeneralLoggedIn /> : <GeneralNotLoggedIn />}
                {loggedIn === true ? <LoggingOff /> : <AccountCreationButton />}


            </div >
        )
    }
}

HomeInfo = reduxForm({
    form: 'HomeInfo'
})(HomeInfo);

export default HomeInfo;
