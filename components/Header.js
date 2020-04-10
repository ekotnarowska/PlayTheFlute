import React, {Component, useState, useEffect} from "react";
import styles from "./Header.module.scss";


const Header = () => {

    return (
        <>
            <h1 className="title header__title">Gra na flecie</h1>
            <h3 className="subtitle header__subtitle">
                Wprowadź nuty lub wybierz
                <button className="button is-danger header__btn">utwór</button>
            </h3>
        </>
    )
}

export default Header