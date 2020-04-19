import React, {Component, useState, useEffect} from "react";
import styles from "./NotesImagesButtons.module.scss";
import Vex from 'vexflow';
import StartButton from "../Buttons/StartButton";
import NoteImage from "../Notes/NoteImage";

const VF = Vex.Flow;
const Formatter = VF.Formatter;
const Renderer = VF.Renderer;
const StaveNote = VF.StaveNote;


const NotesImagesButtons = ({notesImages, notes, addChosenNotes}) => {


    return (
        <>
            <div className='notesContainer'>
                {
                    notes.map((note, i) => {
                        return <button onClick={() => addChosenNotes(note.key)}
                                       className="noteImageBtn" key={note.key}>{note.image}</button>
                    })

                }


            </div>


            <div className="staveViewContainer" id="staveViewContainer"></div>

        </>
    )
}
export default NotesImagesButtons;