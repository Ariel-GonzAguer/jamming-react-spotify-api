import React, { useState } from 'react'
import styles from './BigContainer.module.css'

import Auth from '../Auth/Auth'
import SearchBar from '../SearchBar/SearchBar'
import SearchButton from '../SearchButton/SearchButton'
import ResultsTracks from '../ResultsTracks/ResultsTracks'
import NewPlaylist from '../NewPlaylist/NewPlaylist'
import ResetPlaylist from '../ResetPlaylistButton/ResetPlaylistButton'

export default function BigContainer() {
  // state variables
  const [accessToken, setAccessToken] = useState('');
  const [searchKey, setSearchKey] = useState('');
  const [tracks, setTracks] = useState([]);
  const [namePlaylist, setNamePlaylist] = useState('');
  const [newPlaylist, setNewPlaylist] = useState({ name: '', tracks: [] });


  return (
    <div className={styles.bigContainer}>
      <Auth accessToken={accessToken} setAccessToken={setAccessToken} />

      {accessToken && (
        <>
          <SearchBar search={searchKey} setSearchKey={setSearchKey} />
          <SearchButton searchKey={searchKey} accessToken={accessToken} setTracks={setTracks} />
          <div className={styles.resNpla}>
            <ResultsTracks tracks={tracks} setNewPlaylist={setNewPlaylist} />
            <ResetPlaylist setNewPlaylist={setNewPlaylist} />
            <NewPlaylist newPlaylist={newPlaylist} setNewPlaylist={setNewPlaylist} namePlaylist={namePlaylist} setNamePlaylist={setNamePlaylist} accessToken={accessToken} />
          </div>



        </>
      )}

    </div>


  )
}