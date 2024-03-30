import React from'react'
import styles from './ResetPlaylist.module.css'

export default function ResetPlaylist (props) {


return (
<button className={styles.resetPlaylist} onClick={props.resetPlaylist}>
  Delete Playlist
</button>
)
}