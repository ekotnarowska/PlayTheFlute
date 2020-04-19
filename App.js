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
        setModalOpen(!modalOpen)
    };

    const closeModal = () => {
        setModalOpen(!modalOpen)
    }
    return (
        <>
            <HashRouter>
                <>
                    <Switch>
                        <Route path="/" exact render={(props) => (<Header openModal={openModal} {...props}/>)} />
                        <Route path="/playing/flute" component={Flute}/>
                    </Switch>
                    {modalOpen && <Modal closeModal={closeModal}/>}
                </>
            </HashRouter>
        </>
    )
}

ReactDOM.render(<App/>, document.getElementById("app"));