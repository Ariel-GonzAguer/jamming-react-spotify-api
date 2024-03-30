import React from 'react'
import styles from './RemoveButton.module.css'

export default function RemoveButton(props) {
  return (
    <button className={styles.removeButton} onClick={props.deleteSong}
      id={props.result.id} title={props.result.title}
      data-artist={props.result.artist} data-album={props.result.album}
    >
-</button>
  )
}