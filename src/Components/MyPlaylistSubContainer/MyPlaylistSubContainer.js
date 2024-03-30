import React from 'react'
import styles from '../ResultsSubContainer/ResultsSubContainer.module.css'
import NewTrack from '../NewTrack/NewTrack'

export default function MyPlaylistSubContainer(props) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '25px' }}>
      <h2>{props.namePlaylist}</h2>
      <div className={styles.resultsSubContainer}>
        <ul>
          {props.newPlaylist.map(result => (
            <li key={result.id} className={styles.li}>
              <NewTrack result={result} deleteSong={props.deleteSong} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}