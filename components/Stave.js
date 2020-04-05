import React, {Component, useState, useEffect} from "react";
import styles from "./Stave.module.scss";
import Vex from 'vexflow';


const VF = Vex.Flow;

const Stave = () => {

    useEffect(() => {

        const svgContainer = document.createElement('div');

        const vf = new VF.Factory({
            renderer: {elementId: svgContainer, width: 500, height: 100}
        });


        const score = vf.EasyScore();
        const system = vf.System();

        vf.draw()

    }, [])


    return (
        <>
            <div> </div>
        </>
    )
}

export default Stave;