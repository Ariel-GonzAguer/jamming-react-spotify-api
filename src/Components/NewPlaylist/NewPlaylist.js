import React from 'react'
import styles from '../ResultsTracks/ResultsTracks.module.css'
import NewTrack from '../NewTrack/NewTrack'

export default function NewPlaylist({ newPlaylist, setNamePlaylist, namePlaylist, setNewPlaylist }) {

  function onChange(e) {
    const playListName = e.target.value;
    e.preventDefault();
    setNamePlaylist(playListName)
    return [
   
      setNewPlaylist({...newPlaylist, name: playListName }),
    ]
  }
 

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '25px' }}>
      <input type='text' value={namePlaylist}  onChange={onChange} placeholder='Name your Playlist!' className={styles.playListName}></input>
      <div className={styles.resultsSubContainer}>
        <ul>
          {newPlaylist.tracks.map(track => (
            <li key={track.id} className={styles.li} >

              <NewTrack track={track} setNewPlaylist={setNewPlaylist} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}