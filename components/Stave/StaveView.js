import React, {Component, useState, useEffect} from "react";
import styles from "./StaveView.module.scss";
import Vex from 'vexflow';
import StartButton from "../Buttons/StartButton";
import TrebleClefImage from "../Notes/TrebleClefImage";
import NotesImagesButtons from "../Buttons/NotesImagesButtons";
import NoteImage from "../Notes/NoteImage";
import Flute from "../Flute/Flute"


const VF = Vex.Flow;
const Formatter = VF.Formatter;
const Renderer = VF.Renderer;
const StaveNote = VF.StaveNote;

const notes = [
    {key: 'c', image: <NoteImage noteKey={"c"}/>},
    {key: 'd', image: <NoteImage noteKey={"d"}/>},
    {key: 'e', image: <NoteImage noteKey={"e"}/>},
    {key: 'f', image: <NoteImage noteKey={"f"}/>},
    {key: 'g', image: <NoteImage noteKey={"g"}/>},
    {key: 'a', image: <NoteImage noteKey={"a"}/>},
]

console.log(notes)


const StaveView = () => {

    const [chosenNotes, setChoice] = useState([]);

    console.log(chosenNotes)

    const addChosenNotes = (newNote) => {
        console.log(newNote)
        setChoice([...chosenNotes, newNote])

    }



    return (
        <>

            <NotesImagesButtons notes={notes} addChosenNotes={addChosenNotes}/>
            <div className="staveViewContainer" id="staveViewContainer">
                {chosenNotes.length !== 0 && <TrebleClefImage/>}

                {
                    chosenNotes.map((note, i) => {
                        return (
                            <div key={i}>
                                <NoteImage noteKey={note}/>
                            </div>
                            )
                    })
                }

            </div>
            <Flute flutes={chosenNotes}/>

        </>
    )
}
export default StaveView;