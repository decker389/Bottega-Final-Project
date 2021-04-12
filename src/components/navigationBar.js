import React from 'react';
import { withRouter } from "react-router";
import { NavLink } from 'react-router-dom';

const NavigationBar = (props) => {

    const handleSignOut = () => {
        console.print('handle sign out function called')
    }

    return (
        <div className='navigation-bar'>
            <div className='navigation-bar-left'>
                {props.loggedInStatus === "LOGGED_IN" ? <a onClick={handleSignOut} href='https://google.com'>
                    Log out
                    </a> :
                    <NavLink exact to='/account' activeClassName='nav-link-active'>Sign In</NavLink>}
                <NavLink to='/account/creation' activeClassName='nav-link-active'>Create Account</NavLink>
            </div>

            <div className='navigation-bar-center'>
                <NavLink exact to='/' activeClassName='nav-link-active' >Home</NavLink>
                <NavLink to='/shop' activeClassName='nav-link-active'>Shop</NavLink>
            </div>

            <div className='navigation-bar-right'>
                <NavLink to='/checkout/review' activeClassName='nav-link-active'>Checkout</NavLink>
            </div>
        </div>
    );
}


export default withRouter(NavigationBar);