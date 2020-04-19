import React from 'react'
import styles from "./Modal.module.scss"
import ListOfSongs from "../ListOfSongs/ListOfSongs";

const Modal = ({closeModal}) => {

    return (
        <div className="wrapper">

            <ListOfSongs/>
            <button className="closeModalBtn" onClick={closeModal}>Zamknij</button>
        </div>
    )
};

export default Modal