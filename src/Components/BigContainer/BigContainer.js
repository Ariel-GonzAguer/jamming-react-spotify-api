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
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [newPlaylist, setNewPlaylist] = useState([]);
  const [namePlaylist, setNamePlaylist] = useState('Your New Playlist');
  const [readyToSendPlaylist, setReadyToSendPlaylist] = useState({ name: '', songs: [] });

  useEffect(() => {
    console.log('esto es searchResults:', searchResults);
    console.log('esto es newPlaylist:', newPlaylist);
    console.log('esto se envía a Spotify:', readyToSendPlaylist);
    console.log(getToken())
  }, [ searchResults, newPlaylist, readyToSendPlaylist ]);


  // autenticación
  const clientId = 'fe6ae8f9637e4e798fd33018443fb638';
  const clientSecret = 'fd0a0c38d19d4cea844088bfbefa57e4';

  const basicAuth = btoa(`${clientId}:${clientSecret}`);

  const getToken = async () => {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${basicAuth}`
      },
      body: 'grant_type=client_credentials'
    });

    const data = await response.json();
    return data.access_token;
  };

  // Hacer Solicitudes a la API de Spotify
  async function searchTracks (query) {
    try {
      const token = await getToken();
      const response = await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&limit=25`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await response.json();
      return data.tracks.items;

    } catch (error) {
      console.error('Error al buscar canciones:', error);
      return [];
    }
  };

  function handleChange(e) {
    setSearch(e.target.value)
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (search === '') {
      alert('Please enter a search term');
      return;
    }
    const results = await searchTracks(search);
    const tracks = results.map(result => result);
    setSearchResults(tracks);
  }


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
      if (prevPlaylist.find(song => song.id === newSong.id)) {
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

  function nameNewPlaylist(e) {
    setNamePlaylist(e.target.value);
  }

  function sendPlaylist() {
    if (newPlaylist.length > 0) {
      setReadyToSendPlaylist({ name: namePlaylist, songs: newPlaylist });
      console.log(readyToSendPlaylist)
    } else {
      alert('empty playlist');
    }
  }

  return (
    <div className={styles.bigContainer}>
      <Auth clienteID={clientId} />
      <SearchBar search={search} handleChange={handleChange} />
      <SearchButton search={search} handleSubmit={handleSubmit} />

      <div className={styles.resNpla}>
        <ResultsSubContainer searchResults={searchResults} addSong={addSong} />
        <ResetPlaylist resetPlaylist={resetPlaylist} />
        <NameYourPlaylist nameNewPlaylist={nameNewPlaylist} />
        <SaveToSpotifyButton sendPlaylist={sendPlaylist} readyToSendPlaylist={readyToSendPlaylist} />
        <MyPlaylistSubContainer newPlaylist={newPlaylist} deleteSong={deleteSong} namePlaylist={namePlaylist} />
      </div>

    </div>
  )
}