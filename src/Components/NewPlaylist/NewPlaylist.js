import React from 'react'
import styles from '../ResultsTracks/ResultsTracks.module.css'
import NewTrack from '../NewTrack/NewTrack'
import SendToSpotifyButton from '../SendToSpotifyButton/SendToSpotifyButton'

export default function NewPlaylist({ newPlaylist, setNamePlaylist, namePlaylist, setNewPlaylist, accessToken }) {

  function onChange(e) {
    const playListName = e.target.value;
    e.preventDefault();
    setNamePlaylist(playListName)
    return [
      setNewPlaylist({...newPlaylist, name: playListName }),
    ]
  }

  return (
    <div>
      <div style={{display: 'flex', justifyContent:'space-between', alignItems:'center'}}>  
        <label htmlFor='playlistName' style={{textAlign:'center'}}></label>
      <input id='playlistName' type='text' value={namePlaylist}  onChange={onChange} placeholder='Name your Playlist!' className={styles.playListName}></input>
      <SendToSpotifyButton newPlaylist={newPlaylist} namePlaylist={namePlaylist} accessToken={accessToken} setNamePlaylist={setNamePlaylist} />
      </div>
     
      <div className={styles.resultsSubContainer}>
        <ul className={styles.ul}>
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