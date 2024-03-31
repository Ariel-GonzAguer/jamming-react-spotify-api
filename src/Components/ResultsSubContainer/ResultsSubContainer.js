import React from 'react'
import styles from './ResultsSubContainer.module.css'
import Track from '../Track/Track'

export default function ResultsSubContainer({ searchResults, addSong }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '25px' }}>
      <h2>Results</h2>
      <div className={styles.resultsSubContainer}>
        <ul>
          {searchResults.map(track => (
            <li key={track.id} className={styles.li}>
              <Track track={track} addSong={addSong} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}