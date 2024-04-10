import React from 'react'
import styles from './ResultsTracks.module.css'
import Track from '../Track/Track'

export default function ResultsSubContainer({ tracks, setTracks, setNewPlaylist }) {
  const copyTRACKS = [...tracks];

  return (
    <div style={{display: 'flex', justifyContent:'space-between', alignItems:'center', flexDirection: 'column'}}>
      <h2>Results</h2>
      <div className={styles.resultsSubContainer}>
        <ul className={styles.ul}>
          {copyTRACKS.map(track => (
            <li key={track.id} className={styles.li}>
              <Track track={track} setTracks={setTracks} setNewPlaylist={setNewPlaylist} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}