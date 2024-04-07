import React from 'react';
import styles from './SendToSpotify.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';

export default function SendToSpotifyButton({ newPlaylist, namePlaylist,accessToken, setNamePlaylist }) {
  async function sendToSpotify(e) {
    e.preventDefault();

    try {
      const trackURIs = newPlaylist.tracks.map(track => track.uri);
      const playlistToSend = {
        name: namePlaylist,
        tracks: trackURIs
      };

      if(newPlaylist.tracks.length < 1 || namePlaylist === '') {
        alert('Please add some tracks and select a name for your playlist!');
        return;
      }

      const headers = { Authorization: `Bearer ${accessToken}` };
      let userId;

      const response = await fetch('https://api.spotify.com/v1/me', { headers: headers });
      const jsonResponse = await response.json();
      userId = jsonResponse.id;

      const response_1 = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
        headers: headers,
        method: 'POST',
        body: JSON.stringify({ name: namePlaylist })
      });

      const jsonResponse_1 = await response_1.json();
      const playlistId = jsonResponse_1.id;

      await fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
        headers: headers,
        method: 'POST',
        body: JSON.stringify({ uris: playlistToSend.tracks })
      });

      alert('Playlist sent to Spotify!');
      newPlaylist.tracks = [];
      setNamePlaylist('');


    } catch (error) {
      console.error('error: ', error);
    }

  }

  return (
    <FontAwesomeIcon
      role='button'
      icon={faSpotify}
      className={styles.spotify}
      onClick={sendToSpotify}
    />
  );

}
