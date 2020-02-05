import React from "react"
import ReactDOM from "react-dom"
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import "./theme/layout.css"

//containers
import LoginContainer from "./containers/login"
import HomeContainer from "./containers/home"

function App() {
    return (
        <Router>
            <Switch>
                <Route path='/home'><HomeContainer /></Route>
                <Route path='/'><LoginContainer /></Route>
            </Switch>
        </Router>
    );
}

const rootElement = document.getElementById("app");
ReactDOM.render(<App />, rootElement);