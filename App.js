import React, {Component} from "react";
import ReactDOM from "react-dom";
import Stave from "./components/Stave/Stave";
import Header from "./components/Header/Header";
import Flute from "./components/Flute/Flute"
import styles from "./App.module.scss"
import notes from "./components/Stave/Stave"


const App = () => {
    return (
        <>
            <div className='container'>
                <div className="box top">
                   <Header/>
                    <Stave notes={notes}/>
                </div>
                <Flute/>
            </div>
        </>
    )
}

ReactDOM.render(<App/>, document.getElementById("app"));