import React, { Component } from "react";
import Routee from "./Routee";
import { BrowserRouter } from "react-router-dom";
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <React.Fragment>
                <BrowserRouter>
                    <Routee />
                </BrowserRouter>
            </React.Fragment>
        );
    }
}

export default App;
