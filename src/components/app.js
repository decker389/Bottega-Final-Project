import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { firebase } from "./reducers/initFirebase";


import Home from "./pages/home/home";
import NoMatch from "./pages/no-match";
import Shop from './pages/shop/shop';
import NavigationBar from "./navigationBar";
import AccountSignIn from "./pages/Account/accountSignIn";
import AccountCreation from "./pages/Account/accountCreation";
import CheckoutReview from "./pages/shop/checkoutReview";

const db = firebase.database();

export default class App extends Component {

    render() {
        return (
            <div className="app-container">
                <Router>
                    <NavigationBar />
                    <div>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path='/shop' component={Shop} />
                            <Route exact path='/account/creation' component={AccountCreation} />
                            <Route exact path='/account' component={AccountSignIn} />
                            <Route exact path='/checkout/review' component={CheckoutReview} />


                            <Route component={NoMatch} />
                        </Switch>
                    </div>
                </Router>

            </div>
        );
    }
}
