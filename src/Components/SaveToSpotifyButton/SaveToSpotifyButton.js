import React from 'react'
import styles from './SaveToSpotify.module.css'

export default function SaveToSpotifyButton({ sendPlaylist }) {
  return (
    <button className={styles.spotify} onClick={sendPlaylist}>Send to Spotify
    </button>
  )
}