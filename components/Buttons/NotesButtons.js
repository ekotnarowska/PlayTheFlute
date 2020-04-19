import React, {Component, useState, useEffect} from "react";
import styles from "./NotesButtons.module.scss";
import Stave from "../Stave/Stave"
import Vex from 'vexflow';

const VF = Vex.Flow;
const Formatter = VF.Formatter;
const Renderer = VF.Renderer;
const StaveNote = VF.StaveNote;






const NotesButtons = ({notes, addToStave}) => {
    return (
        <>

            <div>
                {
                    notes.map((note, i) => {
                        return <button onClick={(e) => addToStave(note)} key={i}>{note.keys}</button>
                    })
                }
            </div>
        </>
    )
}

export default NotesButtons
