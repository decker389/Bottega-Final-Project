import React, { Component } from 'react';

import GeneralLoggedIn from './LoggedIn/home';
import GeneralNotLoggedIn from './NotLoggedIn/Home';

class HomeInfo extends Component {

    render() {
        const { loggedIn } = this.props
        return (
            <div>
                {loggedIn === true ? <GeneralLoggedIn /> : <GeneralNotLoggedIn />}
            </div>
        )
    }
}


export default HomeInfo;