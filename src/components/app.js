import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



import Home from "./pages/home/home";
import NoMatch from "./pages/no-match";
import Shop from './pages/shop/shop';
import NavigationBar from "./navigationBar";
import AccountLogin from "./pages/Account/accountLogin/accountLogin";
import AccountCreation from "./pages/Account/accountCreation/accountCreation";
import CheckoutReview from "./pages/shop/checkoutReview";


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
                            <Route exact path='/accountlogin' component={AccountLogin} />
                            <Route exact path='/accountcreation' component={AccountCreation} />
                            <Route exact path='/checkout/review' component={CheckoutReview} />


                            <Route component={NoMatch} />
                        </Switch>
                    </div>
                </Router>

            </div>
        );
    }
}
