import React from 'react'
import styles from './AddButton.module.css'


export default function AddButton({ addTrack }) {
  return (
    <button className={styles.addButton } onClick={addTrack}
    >🖤</button>
  )
}