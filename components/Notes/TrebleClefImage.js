import React, {Component, useRef, useState, useEffect} from "react";
import styles from "./Note.module.scss"
import Vex from "vexflow";

const VF = Vex.Flow;
const Formatter = VF.Formatter;
const Renderer = VF.Renderer;
const StaveNote = VF.StaveNote;

const TrebleClefImage = () => {

    const [context, setContext] = useState(null);
    const [stave, setStave] = useState(null);

    useEffect(() => {
        const newDiv = document.createElement("div");
        const renderer = new Renderer(newDiv, Renderer.Backends.SVG);
        document.querySelector('#trebleClef').appendChild(newDiv)
        renderer.resize(80, 80);
        const context = renderer.getContext();
        context.setFont('Montserrat', 6, '').setBackgroundFillStyle("#eed")
        // Create a stave at position 10, 40 of width 400 on the canvas.
        const stave = new VF.Stave(0, -25, 80);
        // Add a clef and time signature.
        stave.addClef("treble").addTimeSignature("4/4");
        // Connect it to the rendering context and draw!
        stave.setContext(context).draw();
        //create notes
        VF.Formatter.FormatAndDraw(context, stave, []);
        setContext(context);
        setStave(stave);



    }, []);

    return (
        <>
            <div className="trebleClefBox">
                <div className='trebleClef' id="trebleClef">
                </div>

            </div>
        </>
    )
}

export default TrebleClefImage

