import React, { useState, useEffect } from 'react'
import styles from './BigContainer.module.css'

import Auth from '../Auth/Auth'
import SearchBar from '../SearchBar/SearchBar'
import SearchButton from '../SearchButton/SearchButton'
import ResultsTracks from '../ResultsTracks/ResultsTracks'
import NewPlaylist from '../NewPlaylist/NewPlaylist'
import ResetPlaylist from '../ResetPlaylistButton/ResetPlaylistButton'



export default function BigContainer() {
  // variables de estado
  const [accessToken, setAccessToken] = useState('');
  const [clientID, setClientID] = useState('');
  const [searchKey, setSearchKey] = useState('');
  const [tracks, setTracks] = useState([]);
  const [namePlaylist, setNamePlaylist] = useState('');
  const [newPlaylist, setNewPlaylist] = useState({ name: '', tracks: [] });

  useEffect(() => {
    async function getUserID() {
      const response = await fetch('https://api.spotify.com/v1/me', {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
      const data = await response.json();
      return setClientID(data.id);
    }
    getUserID();

  }, [accessToken]);


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

            <NewPlaylist newPlaylist={newPlaylist} setNewPlaylist={setNewPlaylist} namePlaylist={namePlaylist} setNamePlaylist={setNamePlaylist} clientID={clientID} accessToken={accessToken} />
          </div>


        </>
      )}
    </div>


  )
}