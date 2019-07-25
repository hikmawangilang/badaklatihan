import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignIn from "./component/SignIn";
import Home from "./component/Home";
import Home2 from "./component/Home2";
class Routee extends Component {
    state = {};
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={SignIn} />
                    <Route exact path="/home" component={Home} />
                    <Route path="/home2" component={Home2} />
                    <Route exact path="/home/home2" component={Home2} />
                </Switch>
            </BrowserRouter>
        );
    }
}
export default Routee;
