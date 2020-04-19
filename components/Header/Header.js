import React, {Component, useState, useEffect} from "react";
import styles from "./Header.module.scss";
import Stave from "../Stave/Stave";
import notes from "../Stave/Stave"
import {Switch} from "react-router-dom";
import StaveView from "../Stave/StaveView";
import NotesImagesButtons from "../Buttons/NotesImagesButtons";



const Header = ({openModal}) => {


    return (
        <>
            <div className='container'>
                <div className="box top">
                    <h1 className="title header__title">Gra na flecie</h1>
                    <h3 className="subtitle header__subtitle">
                        Wprowadź nuty lub wybierz
                        <button className="openModalBtn" onClick={openModal}>Utwór z listy</button>
                    </h3>
                    <StaveView/>
                </div>
            </div>
        </>
    )
}

export default Header