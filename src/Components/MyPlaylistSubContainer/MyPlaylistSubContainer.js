import React from 'react'
import styles from '../ResultsSubContainer/ResultsSubContainer.module.css'
import NewTrack from '../NewTrack/NewTrack'

export default function MyPlaylistSubContainer({namePlaylist, newPlaylist, deleteSong}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '25px' }}>
      <h2>{namePlaylist}</h2>
      <div className={styles.resultsSubContainer}>
        <ul>
          {newPlaylist.map(track => (
            <li key={track.id} className={styles.li}>
              <NewTrack track={track} deleteSong={deleteSong} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}