import React, {Component, useState, useEffect} from "react";
import styles from "./Flute.module.scss";
import fluteImage from "../../assets/Flute_4.png"
import SaveButton from "../Buttons/SaveButton";

const Flute = () => {

    return (
        <div className='bottom'>
            <img src={fluteImage} className="flute__image"/>
            <SaveButton/>
        </div>
    )
}

export default Flute