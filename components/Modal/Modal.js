import React from 'react'
import styles from "./Modal.module.scss"
import ListOfSongs from "../ListOfSongs/ListOfSongs";

const Modal = () => {

    return (
        <div className="wrapper">
            <ListOfSongs/>
        </div>
    )
};

export default Modal