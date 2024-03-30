import React from 'react'
import styles from './AddButton.module.css'


export default function AddButton(props) {
  return (
    <button className={styles.addButton} onClick={props.addSong}
    id={props.result.id} title={props.result.title}
    data-artist={props.result.artist} data-album={props.result.album}
    // cuando un elemento/etiqueta HTML no cuenta con ciertos atributos nativos, hay que usar data-set para añadirlos y que los reconozca, y así poder trabajar en ellos
    >💖</button>
  )
}