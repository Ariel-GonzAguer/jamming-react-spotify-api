import React from 'react'
import styles from '../Track/Track.module.css'
import RemoveButton from '../RemoveButton/RemoveButton'

export default function NewTrack(props) {
  return (
    <div className={styles.liStyle}>
      Artist: {props.result.artist}
      Song: {props.result.title}
      Album: {props.result.album}
      <RemoveButton deleteSong={props.deleteSong} result={props.result} />
    </div>

  )
}