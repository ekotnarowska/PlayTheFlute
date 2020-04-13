import React, {Component, useRef, useState, useEffect} from "react";
import styles from "./Note.module.scss"
import Vex from "vexflow";

const VF = Vex.Flow;
const Formatter = VF.Formatter;
const Renderer = VF.Renderer;
const StaveNote = VF.StaveNote;

const NotesImage = (notes) => {

    const [context, setContext] = useState(null);
    const [stave, setStave] = useState(null);


    return (
        <>
            <div className="noteContainer">
                <div className='note' id="note">
                </div>
            </div>
        </>
    )
}

export default NotesImage