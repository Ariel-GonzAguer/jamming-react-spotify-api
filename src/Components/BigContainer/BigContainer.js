import React, { useState, useEffect } from 'react'
import styles from './BigContainer.module.css'

import SearchBar from '../SearchBar/SearchBar'
import SearchButton from '../SearchButton/SearchButton'
import ResultsSubContainer from '../ResultsSubContainer/ResultsSubContainer'
import MyPlaylistSubContainer from '../MyPlaylistSubContainer/MyPlaylistSubContainer'
import SaveToSpotifyButton from '../SaveToSpotifyButton/SaveToSpotifyButton'
import ResetPlaylist from '../ResetPlaylist/ResetPlaylist'
import NameYourPlaylist from '../NameYourPlayList/NameYourPlaylist'
import Auth from '../Auth/Auth'


export default function BigContainer() {
  const [accessToken, setAccessToken] = useState('');
  const [clienteID, setClienteID] = useState('');
  const [searchKey, setSearchKey] = useState('');
  const [tracks, setTracks] = useState([]);
  const [newPlaylist, setNewPlaylist] = useState([]);
  const [playlistToSend, setPlaylistToSend] = useState([]);


  useEffect(() => {
   
  }, [  ]);
  
  


  function addSong(e) {
    const newSong =
    {
      id: e.target.id,
      title: e.target.title,
      artist: e.target.dataset.artist,
      album: e.target.dataset.album,
      uri: e.target.dataset.uri
    }

    setNewPlaylist(prevPlaylist => {
      // con esta función solo se pueden agregar las canciones una vez a la lista
      if (prevPlaylist.find(song => song.uri === newSong.uri)) {
        return prevPlaylist;
      } else {
        return [...prevPlaylist, newSong]
      }
    });
  }

  function deleteSong(e) {
    const songToDelete = e.target.id;
    setNewPlaylist(prev => prev.filter(song => song.id !== songToDelete));
  }

  function resetPlaylist(e) {
    setNewPlaylist([]);
  }


  return (
    <div className={styles.bigContainer}>

    </div>

    
  )
}