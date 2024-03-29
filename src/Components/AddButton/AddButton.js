import React from 'react'
import styles from './AddButton.module.css'

export default function AddButton(props) {

  return (
    <button className={styles.addButton} onClick={props.addSong}
    id={props.result.id} title={props.result.title}
    artist={props.artist} album={props.result.album}
    
    >
      +{props.id}</button>
  )
}