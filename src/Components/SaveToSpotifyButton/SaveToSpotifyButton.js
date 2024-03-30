import React from 'react'
import styles from './SaveToSpotify.module.css'

export default function SaveToSpotifyButton(props) {
  return (
    <button className={styles.spotify} onClick={props.sendPlaylist}>Send to Spotify
    </button>
  )
}