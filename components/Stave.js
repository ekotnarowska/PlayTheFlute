import React, {Component, useState, useEffect} from "react";
import styles from "./Stave.module.scss";
import Vex from 'vexflow';
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


const NotesButtons = ({notes}) => {

    return (
        <>
            <h3>Wybierz nuty</h3>
            <div>
                {
                    notes.map((note, i) => {
                        return <button key={i}>{note.keys}</button>
                    })
                }
            </div>

        </>
    )
}

const Stave = () => {

    const [note, setNote] = useState('')

    useEffect(() => {

        const div = document.createElement("div");
        const renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

        document.querySelector('#staveContainer').appendChild(div)

        renderer.resize(600, 200);
        const context = renderer.getContext();

        // Create a stave at position 10, 40 of width 400 on the canvas.
        const stave = new VF.Stave(10, 40, 600);

        // Add a clef and time signature.
        stave.addClef("treble").addTimeSignature("4/4");

        // Connect it to the rendering context and draw!
        stave.setContext(context).draw();


        VF.Formatter.FormatAndDraw(context, stave, notes);

    }, [])


    return (
        <>
            <NotesButtons notes={notes}/>
            <div className="staveContainer" id="staveContainer"> </div>
        </>
    )
}

export default Stave;