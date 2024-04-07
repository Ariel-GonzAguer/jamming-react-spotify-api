import React from 'react'
import styles from './ResetPlaylistButton.module.css'

export default function ResetPlaylist({ setNewPlaylist }) {
  function resetNewPlaylist(e) {
    e.preventDefault();
    setNewPlaylist({ name: '', tracks: [] });
    alert('Playlist reseted');
  }

  return (
    <button className={styles.resetPlaylist} onClick={resetNewPlaylist}>
      Reset<br /> 
      Playlist
    </button>
  )
}