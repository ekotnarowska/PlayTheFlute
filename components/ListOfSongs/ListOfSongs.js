import React from 'react'
import styles from "./ListOfSongs.module.scss"


const ListOfSongs = () => {

    return (
        <>
            <h2>Lista utworów</h2>
            <li className = "songItem">
                <h3>Title 1</h3>
                <button className="choseBtn">Wybierz</button>
            </li>
        </>
)
}

export default ListOfSongs