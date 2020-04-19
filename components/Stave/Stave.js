import React, {Component, useState, useEffect} from "react";
import styles from "./Stave.module.scss";
import Vex from 'vexflow';
import StartButton from "../Buttons/StartButton";
import NotesButtons from "../Buttons/NotesButtons";
// import notes from "./NotesButtons";


const VF = Vex.Flow;
const Formatter = VF.Formatter;
const Renderer = VF.Renderer;
const StaveNote = VF.StaveNote;

const C = new StaveNote({keys: ["c/4"], duration: "q"});
const D = new StaveNote({keys: ["d/4"], duration: "q"});
const E = new StaveNote({keys: ["e/4"], duration: "q"});
const F = new StaveNote({keys: ["f/4"], duration: "q"});
const G = new StaveNote({keys: ["g/4"], duration: "q"});
const A = new StaveNote({keys: ["a/4"], duration: "q"});
const C2 = new StaveNote({keys: ["c#/4"], duration: "q"});
const notes = [C, D, E, F, G, A];


const Stave = () => {
    const [notesOnStave, setNotesOnStave] = useState([]);
    const [context, setContext] = useState(null);
    const [stave, setStave] = useState(null);
    const addToStave = (note) => {
        setNotesOnStave([...notesOnStave, note])
    }
    useEffect(() => {
        const div = document.createElement("div");
        const renderer = new Renderer(div, Renderer.Backends.SVG);
        document.querySelector('#staveContainer').appendChild(div)
        renderer.resize(1000, 400);
        const context = renderer.getContext();
        context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed")
        // Create a stave at position 10, 40 of width 400 on the canvas.
        const stave = new VF.Stave(100, 40, 1000);
        // Add a clef and time signature.
        stave.addClef("treble").addTimeSignature("4/4");
        // Connect it to the rendering context and draw!
        stave.setContext(context).draw();
        //create notes
        // VF.Formatter.FormatAndDraw(context, stave, []);
        setContext(context);
        setStave(stave);


    }, []);
    useEffect(() => {
        console.log(notesOnStave);
        if (notesOnStave.length === 0) return;
        let notes = notesOnStave.map(note => new StaveNote({clef: "treble", keys: note.keys, duration: note.duration}));
        console.log(notes);

        Formatter.FormatAndDraw(context, stave, notes, {
            auto_beam: true
        });

    }, [notesOnStave]);


    return (
        <>

            <NotesButtons notes={notes} addToStave={addToStave}/>
            <div className="staveContainer" id="staveContainer"></div>
            <StartButton/>
        </>
    )
}
export default Stave;