import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavigationBar extends Component {
    render() {
        return (
            <div className='navigation-bar'>
                <div className='navigation-bar-left'>
                    <NavLink to='/account' activeClassName='nav-link-active'>Sign In</NavLink>
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
}

export default NavigationBar;