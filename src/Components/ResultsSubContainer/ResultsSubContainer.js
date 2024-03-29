import React from 'react'
import styles from './ResultsSubContainer.module.css'
import Track from '../Track/Track'

export default function ResultsSubContainer(props) {


  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '25px'}}>
      <h2>Results</h2>
      <div className={styles.resultsSubContainer}>
        <ul>
          {props.searchResults.map(result => (
            <>
            <Track result={result} addSong={props.addSong} album={props.album} />
            <hr className={styles.hr} />
            </>
          ))}
        </ul>
      </div>
    </div>
  )
}