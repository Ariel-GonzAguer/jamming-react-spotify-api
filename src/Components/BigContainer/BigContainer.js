import React, { useState, useEffect } from 'react'
import styles from './BigContainer.module.css'

import Auth from '../Auth/Auth'
import SearchBar from '../SearchBar/SearchBar'
import SearchButton from '../SearchButton/SearchButton'
import ResultsTracks from '../ResultsTracks/ResultsTracks'
import NewPlaylist from '../NewPlaylist/NewPlaylist'



export default function BigContainer() {
  // variables de estado
  const [accessToken, setAccessToken] = useState('');
  const [clienteURI, setClienteURI] = useState('');
  const [searchKey, setSearchKey] = useState('');
  const [tracks, setTracks] = useState([]);
  const [namePlaylist, setNamePlaylist] = useState('');
  const [newPlaylist, setNewPlaylist] = useState({ name: '', tracks: [] });

  useEffect(() => {
    console.log(newPlaylist)

  }, [newPlaylist]);




  // reset nueva playlist
  function resetNewPlaylist(e) {
    setNewPlaylist({ name: '', tracks: [] });
  }


  return (
    <div className={styles.bigContainer}>
      <Auth accessToken={accessToken} setAccessToken={setAccessToken} />

      {accessToken && (
        <>
          <SearchBar search={searchKey} setSearchKey={setSearchKey} />
          <SearchButton searchKey={searchKey} accessToken={accessToken} setTracks={setTracks} />
          <ResultsTracks tracks={tracks} setNewPlaylist={setNewPlaylist} />
          <NewPlaylist newPlaylist={newPlaylist} setNewPlaylist={setNewPlaylist} namePlaylist={namePlaylist} setNamePlaylist={setNamePlaylist} />

        </>
      )}
    </div>


  )
}