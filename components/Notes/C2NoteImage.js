import React, {Component, useRef, useState, useEffect} from "react";
import styles from "./Note.module.scss"
import Vex from "vexflow";

const VF = Vex.Flow;
const Formatter = VF.Formatter;
const Renderer = VF.Renderer;
const StaveNote = VF.StaveNote;

const C2NoteImage = () => {

    const [context, setContext] = useState(null);
    const [stave, setStave] = useState(null);

    useEffect(() => {
        const c2Div = document.createElement("div");
        const renderer = new Renderer(c2Div, Renderer.Backends.SVG);
        document.querySelector('#c2Note').appendChild(c2Div)
        renderer.resize(50, 60);
        const context = renderer.getContext();
        context.setFont('Montserrat', 6, '').setBackgroundFillStyle("#eed")
        // Create a stave at position 10, 40 of width 400 on the canvas.
        const stave = new VF.Stave(0, -40, 50);
        // Connect it to the rendering context and draw!
        stave.setContext(context).draw();
        //create notes
        VF.Formatter.FormatAndDraw(context, stave, [new StaveNote({keys: ["c#/4"], duration: "q"})]);
        setContext(context);
        setStave(stave);


    }, []);


    return (
        <>
            <div className="notesBox">
                <div className='note' id="c2Note">
                </div>
                <h4 className="noteTitle">C2</h4>
            </div>
        </>
    )
}

export default C2NoteImage