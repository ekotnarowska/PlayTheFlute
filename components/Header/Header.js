import React, {Component, useState, useEffect} from "react";
import styles from "./Header.module.scss";
import Stave from "../Stave/Stave";
import notes from "../Stave/Stave"
import {Switch} from "react-router-dom";



const Header = ({openModal}) => {


    return (
        <>
            <div className='container'>
                <div className="box top">
                    <h1 className="title header__title">Gra na flecie</h1>
                    <h3 className="subtitle header__subtitle">
                        Wprowadź nuty lub wybierz
                        <button onClick={openModal} className="button is-danger header__btn">Utwór</button>
                    </h3>
                    <Stave notes={notes}/>
                </div>
            </div>
        </>
    )
}

export default Header