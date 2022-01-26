import React from 'react';

import GeneralLoggedIn from './LoggedIn/home';
import GeneralNotLoggedIn from './NotLoggedIn/Home';





const HomeInfo = (props) => {
    return (
        <div>
            {props.loggedIn === true ? <GeneralLoggedIn /> : <GeneralNotLoggedIn />}
            {console.log(this.loggedIn)}
        </div>
    )
}

export default HomeInfo;