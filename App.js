import React, {Component} from "react";
import ReactDOM from "react-dom";
import Stave from "./components/Stave";
import styles from "./App.module.scss"

const App = () => {
    return (
        <>
            <h1>Gra na flecie</h1>
            <Stave/>
        </>
    )
}

ReactDOM.render(<App/>, document.getElementById("app"));