import React from 'react'
import styles from './RemoveButton.module.css'

export default function RemoveButton({track, deleteSong}) {
  return (
    <button className={styles.removeButton} onClick={deleteSong}
    id={track.id} title={track.title}
    data-artist={track.artist} data-album={track.album} data-uri={track.uri}
    >
❌</button>
  )
}