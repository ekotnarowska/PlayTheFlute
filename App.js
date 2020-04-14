import React, {Component, useState} from "react";
import ReactDOM from "react-dom";
import {HashRouter, BrowserRouter, Switch, Route, Link, NavLink} from "react-router-dom";
import Header from "./components/Header/Header";
import Flute from "./components/Flute/Flute"
import Modal from "./components/Modal/Modal"
import styles from "./App.module.scss"


const App = () => {
    const [modalOpen, setModalOpen] = useState(false);


    const openModal = () => {
        setModalOpen(modalOpen)
    };
    return (
        <>
            <HashRouter>
                <>
                    <Switch>
                        <Route exact path='/' component={Header}/>
                        <Route path="/playing/flute" component={Flute}/>
                    </Switch>
                    {modalOpen && <Modal/>}
                </>
            </HashRouter>
        </>
    )
}

ReactDOM.render(<App/>, document.getElementById("app"));