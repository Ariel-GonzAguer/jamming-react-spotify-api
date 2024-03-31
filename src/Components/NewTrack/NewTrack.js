import React from 'react'
import styles from '../Track/Track.module.css'
import RemoveButton from '../RemoveButton/RemoveButton'

export default function NewTrack({track, deleteSong}) {
  return (
    <div className={styles.liStyle}>
      Song:{track.title}-
      Artist:{track.artist}-
      Album:{track.album}-
      <RemoveButton deleteSong={deleteSong} track={track} />
    </div>

  )
}