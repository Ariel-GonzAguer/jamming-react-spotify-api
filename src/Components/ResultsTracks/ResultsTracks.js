import React from 'react'
import styles from './ResultsTracks.module.css'
import Track from '../Track/Track'

export default function ResultsSubContainer({ tracks, setNewPlaylist }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '25px' }}>
      <h2>Results</h2>
      <div className={styles.resultsSubContainer}>
        <ul className={styles.ul}>
          {tracks.map(track => (
            <li key={track.id} className={styles.li}>
              <Track track={track} setNewPlaylist={setNewPlaylist} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}