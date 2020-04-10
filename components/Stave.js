import React, {Component, useState, useEffect} from "react";
import styles from "./Stave.module.scss";
import Vex from 'vexflow';
import SaveButton from "./SaveButton";
// import NotesButtons from "./NotesButtons";
// import notes from "./NotesButtons";
const VF = Vex.Flow;
const C = new VF.StaveNote({keys: ["c/4"], duration: "q"});
const D = new VF.StaveNote({keys: ["d/4"], duration: "q"});
const E = new VF.StaveNote({keys: ["e/4"], duration: "q"});
const F = new VF.StaveNote({keys: ["f/4"], duration: "q"});
const G = new VF.StaveNote({keys: ["g/4"], duration: "q"});
const A = new VF.StaveNote({keys: ["a/4"], duration: "q"});
const C2 = new VF.StaveNote({keys: ["c#/4"], duration: "q"});
const notes = [C, D, E, F, G, A];
const NotesButtons = ({notes, addToStave}) => {
    return (
        <>

            <div>
                {
                    notes.map((note, i) => {
                        return <button onClick={(e) => addToStave(note.keys)} key={i}>{note.keys}</button>
                    })
                }
            </div>
        </>
    )
}
const Stave = () => {
    const [notesOnStave, setNotesOnStave] = useState([]);
    const [context, setContext] = useState(null);
    const [stave, setStave] = useState(null);
    const addToStave = (note) => {
        setNotesOnStave([...notesOnStave, note])
    }
    useEffect(() => {
        const div = document.createElement("div");
        const renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
        document.querySelector('#staveContainer').appendChild(div)
        renderer.resize(1200, 200);
        const context = renderer.getContext();
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
        //
        console.log(notesOnStave);
    }, []);
    useEffect(() => {
        console.log(notesOnStave);
        if (notesOnStave.length === 0) return;
        let notes = notesOnStave.map(note => new VF.StaveNote({keys: note, duration: "q"}));
        console.log(notes);
        // var notes = [
        //     new VF.StaveNote({keys: ["c/4"], duration: "1"})
        // ];
        VF.Formatter.FormatAndDraw(context, stave, notes);
    }, [notesOnStave]);
    return (
        <>
            <NotesButtons notes={notes} addToStave={addToStave}/>
            <div className="staveContainer" id="staveContainer"> </div>
            <SaveButton/>
        </>
    )
}
export default Stave;