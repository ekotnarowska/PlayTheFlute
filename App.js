import React, {Component} from "react";
import ReactDOM from "react-dom";
import Stave from "./components/Stave";
import Header from "./components/Header";
import styles from "./App.module.scss"
import notes from "./components/Stave"
import "bulma";

const App = () => {
    return (
        <>
            <div className='container'>
                <div className="box top">
                   <Header/>
                    <Stave notes={notes}/>
                </div>
            </div>
        </>
    )
}

ReactDOM.render(<App/>, document.getElementById("app"));