import React from 'react'
import styles from './AddButton.module.css'


export default function AddButton({ addSong, track }) {
  return (
    <button className={styles.addButton} onClick={addSong}
    id={track.id} title={track.name}
    data-artist={track.artists[0].name} data-album={track.album.name} data-uri={track.uri}
    // cuando un elemento/etiqueta HTML no cuenta con ciertos atributos nativos, hay que usar data-set para añadirlos y que los reconozca, y así poder trabajar en ellos
    >🖤</button>
  )
}