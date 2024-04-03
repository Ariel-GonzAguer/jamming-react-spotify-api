import React from 'react'
import styles from './RemoveButton.module.css'

export default function RemoveButton({deleteTrack}) {
  return (
    <button className={styles.removeButton} onClick={deleteTrack}
    >❌</button>
  )
}