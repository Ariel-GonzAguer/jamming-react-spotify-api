import React, { useState } from 'react'
import styles from './BigContainer.module.css'
import SearchBar from '../SearchBar/SearchBar'
import SearchButton from '../SearchButton/SearchButton'
import ResultsSubContainer from '../ResultsSubContainer/ResultsSubContainer'
import MyPlaylistSubContainer from '../MyPlaylistSubContainer/MyPlaylistSubContainer'

export default function BigContainer() {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [newPlaylist, setNewPlaylist] = useState([]);

  function handleChange(e) {
    setSearch(e.target.value)
  }

  async function handleSubmit(e) {
    e.preventDefault();
    // const response = await fetch('spotify.com');
    // const data = await response.json();

    // setSearchResults(data);

    setSearchResults([
      { id: 'a1', title: 'Track 11', artist: 'L6', album: '130121', test: true },
      { id: 'b2', title: 'Track 12', artist: 'L66', album: '130121', test: true },
      { id: 'c3', title: 'Track 13', artist: 'L666', album: '130121', test: true },
      { id: 'd4', title: 'Track 14', artist: 'L1', album: '130121', test: true },
      { id: 'e5', title: 'Track 15', artist: 'L13', album: '130121', test: true }
    ]);

    setSearch('');
  }

  function addSong(e) {
    const newSong =
    {
      id: e.target.id,
      title: e.target.title,
      artist: e.target.artist,
      album: e.target.album
    }
    setNewPlaylist([...newPlaylist, newSong]);
    console.log(newSong)
  }



  return (
    <div className={styles.bigContainer}>
      <SearchBar search={search} handleChange={handleChange} />
      <SearchButton search={search} handleSubmit={handleSubmit} />

      <div className={styles.resNpla}>
        <ResultsSubContainer searchResults={searchResults} addSong={addSong} />
        <MyPlaylistSubContainer newPlaylist={newPlaylist} />
      </div>


    </div>
  )
}