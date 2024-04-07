import React from 'react'
import styles from './SearchButton.module.css'

export default function SearchButton({ searchKey, accessToken, setTracks }) {
  async function searchTracks(e) {
    e.preventDefault();
    if (!searchKey) {
      alert('Please enter a song o artist name');
      return;
    }

    const url = `https://api.spotify.com/v1/search?q=${searchKey}&type=track&limit=50`;

    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }, 
      method: 'GET'
    });
    const data = await response.json();
    const tracks = await data.tracks.items;
    setTracks(tracks);
  }

  return (
    <button className={styles.btnSubmit} onClick={searchTracks}>Search</button>
  )
}