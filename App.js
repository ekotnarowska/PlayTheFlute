import React, {Component} from "react";
import ReactDOM from "react-dom";
import Stave from "./components/Stave";
import styles from "./App.module.scss"
import notes from "./components/Stave"

const App = () => {
    return (
        <>
            <h1>Gra na flecie</h1>
            <Stave notes = {notes}/>
        </>
    )
}

ReactDOM.render(<App/>, document.getElementById("app"));