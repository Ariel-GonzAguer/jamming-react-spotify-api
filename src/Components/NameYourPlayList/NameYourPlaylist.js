import React from 'react'
import styles from './NameYourPlaylist.module.css'

export default function NameYourPlaylist({ nameNewPlaylist }) {
  return (
    <div className={styles.div}>
      <label htmlFor='newNameP'>Name Your New Playlist</label>
      <input className={styles.nameYourPlaylist}  type='text' id='newNameP' onChange={nameNewPlaylist} placeholder='Choose a cool name'></input>
    </div>
  )
}