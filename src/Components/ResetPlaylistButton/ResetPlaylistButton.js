import React from 'react'
import styles from './ResetPlaylistButton.module.css'

export default function ResetPlaylist({ setNewPlaylist }) {
  function resetNewPlaylist(e) {
    setNewPlaylist({ name: '', tracks: [] });
  }

  return (
    <button className={styles.resetPlaylist} onClick={resetNewPlaylist}>
      Reset Playlist
    </button>
  )
}