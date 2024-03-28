import React from 'react'
import styles from './AddButton.module.css'

export default function AddButton(props) {

  return (
    <button className={styles.addButton} onClick={props.addSong}>+</button>
  )
}