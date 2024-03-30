import React, { useState, useEffect } from 'react'
import styles from './BigContainer.module.css'
import SearchBar from '../SearchBar/SearchBar'
import SearchButton from '../SearchButton/SearchButton'
import ResultsSubContainer from '../ResultsSubContainer/ResultsSubContainer'
import MyPlaylistSubContainer from '../MyPlaylistSubContainer/MyPlaylistSubContainer'
import SaveToSpotifyButton from '../SaveToSpotifyButton/SaveToSpotifyButton'
import ResetPlaylist from '../ResetPlaylist/ResetPlaylist'
import NameYourPlaylist from '../NameYourPlayList/NameYourPlaylist'


export default function BigContainer() {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [newPlaylist, setNewPlaylist] = useState([]);
  const [namePlaylist, setNamePlaylist] = useState('Your New Playlist');
  const [readyToSendPlaylist, setReadyToSendPlaylist] = useState({name: '', songs: []});

  useEffect(() => {
    if(readyToSendPlaylist.lenght > 0) {
      console.log(readyToSendPlaylist);
    }
  }, [readyToSendPlaylist]);

  function handleChange(e) {
    setSearch(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    // const response = await fetch('spotify.com');
    // const data = await response.json();

    // setSearchResults(data);

    setSearchResults([
      { id: 'a1', title: 'Uno', artist: 'Unox', album: '130121' },
      { id: 'b2', title: 'Dos', artist: 'Duz', album: '130121' },
      { id: 'c3', title: 'Tres', artist: 'TriC', album: '130121' },
      { id: 'd4', title: 'Cuatro', artist: 'Cuatro4', album: '130121' },
      { id: 'e5', title: 'Cinco', artist: 'Zinc', album: '130121' }
    ])
  }

  function addSong(e) {
    const newSong =
    {
      id: e.target.id,
      title: e.target.title,
      artist: e.target.dataset.artist,
      album: e.target.dataset.album
    }

    setNewPlaylist(prevPlaylist => {
      // con esta función solo se pueden agregar las canciones una vez a la lista
      if (prevPlaylist.find(song => song.id === newSong.id)) {
        return prevPlaylist;
      } else {
        return [...prevPlaylist, newSong]
      }
    })
  }

  function deleteSong(e) {
    const songToDelete = e.target.id;
    console.log('acá', songToDelete);
    setNewPlaylist(prev => prev.filter(song => song.id !== songToDelete));
  }

  function resetPlaylist(e) {
    setNewPlaylist([]);
  }

  function nameNewPlaylist(e) {
    setNamePlaylist(e.target.value);
  }

  function sendPlaylist() {
    if(newPlaylist.length > 0){
      setReadyToSendPlaylist({name: namePlaylist, songs: newPlaylist});
    } else {
      alert('empty playlist');
    }
  }

  return (
    <div className={styles.bigContainer}>

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