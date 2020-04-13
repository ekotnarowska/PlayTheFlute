import React, {Component} from "react";
import ReactDOM from "react-dom";
import {HashRouter, BrowserRouter, Switch, Route, Link, NavLink} from "react-router-dom";
import Header from "./components/Header/Header";
import Flute from "./components/Flute/Flute"
import styles from "./App.module.scss"


const App = () => {
    return (
        <>
            <HashRouter>
                <>
                    <Route exact path='/' component={Header}/>
                    <Route path="/playing/flute" component={Flute}/>
                </>
            </HashRouter>
        </>
    )
}

ReactDOM.render(<App/>, document.getElementById("app"));