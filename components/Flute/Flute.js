import React, {Component, useState, useEffect} from "react";
import styles from "./Flute.module.scss";
import SaveButton from "../Buttons/SaveButton";
import fluteImage from "../../assets/Flute.png"
import fluteImage_C from "../../assets/Flute_C.png"
import fluteImage_D from "../../assets/Flute_D.png"
import fluteImage_E from "../../assets/Flute_E.png"
import fluteImage_F from "../../assets/Flute_F.png"
import fluteImage_G from "../../assets/Flute_G.png"
import fluteImage_A from "../../assets/Flute_A.jpg"
import fluteImage_C2 from "../../assets/Flute_C2.png"
import StartButton from "../Buttons/StartButton";
import StaveView from "../Stave/StaveView";


const Flute = ({flutes}) => {
    let [actualPlayedFluteIndex, setActualPlayedFluteIndex] = useState(0);
    const [play, startPlaying] = useState(false)
    const [intervalId, setIntervalId] = useState(null);


    let images = {
        c: fluteImage_C,
        d: fluteImage_D,
        e: fluteImage_E,
        f: fluteImage_F,
        g: fluteImage_G,
        a: fluteImage_A,
        c2: fluteImage_C2
    }


    useEffect(() => {
        if (!play) return;
        let interval = setInterval(() => {
            setActualPlayedFluteIndex(actualPlayedFluteIndex => {
                console.log(actualPlayedFluteIndex, flutes.length)

                if (actualPlayedFluteIndex > flutes.length-2) {

                    startPlaying(false)
                    return 0//ustawiamy wartość index 0
                }
                return actualPlayedFluteIndex + 1

            });



        }, 1500);

        setIntervalId(interval);

        return () => {
            clearInterval(interval);
            setIntervalId(null);
        }
    }, [play]);

    return (
        <div className='bottom'>
            <button onClick={(e) => startPlaying(!play)} className="startBtn">
                {
                    play ? "Stop" : "Graj"
                }
            </button>
            {!play && <img src={fluteImage}/>}
            {play && <div className="fluteBox">
                <strong>{flutes[actualPlayedFluteIndex]}</strong>
                <img alt={flutes[actualPlayedFluteIndex]} src={images[flutes[actualPlayedFluteIndex]]}
                     className="flute__image"/>
            </div>}
            <SaveButton/>
        </div>
    )
}
export default Flute