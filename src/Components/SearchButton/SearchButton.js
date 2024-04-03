import React from 'react'
import styles from './SearchButton.module.css'

export default function SearchButton({ searchKey, accessToken, setTracks }) {
  async function searchTracks(e) {
    e.preventDefault();
    if (!searchKey) {
      alert('Please enter a song o artist name');
      return;
    }

    const url = `https://api.spotify.com/v1/search?q=${searchKey}&type=track`;

    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });
    const data = await response.json();
    const tracks = await data.tracks.items;
    setTracks(tracks);
  }

  return (
    <button className={styles.btnSubmit} onClick={searchTracks}>Search</button>
  )
}