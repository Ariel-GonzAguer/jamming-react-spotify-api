import React from 'react'
import styles from './SendToSpotify.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify } from '@fortawesome/free-brands-svg-icons'

export default function SendToSpotifyButton({ newPlaylist, namePlaylist, clientID, accessToken }) {

  function sendToSpotify(e) {
    e.preventDefault();

    if (newPlaylist.tracks.length < 1) {
      alert('Empty playlist!');
      return
    }

    const trackURIs = newPlaylist.tracks.map(track => track.uri)
    const playlistToSend = {
      name: namePlaylist,
      tracks: trackURIs
    }

    let playlistID;
    async function createPlaylist() {
      const response = await fetch(`https://api.spotify.com/v1/users/${clientID}/playlists`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'name': `${playlistToSend.name}`,
          'description': 'New playlist created from Jammming!',
          'public': false
        })
      });
      const data = await response.json();
      return playlistID = data.id;
    }
    createPlaylist();

    async function addTracksToPlaylist() {
      const response = await fetch(`https://api.spotify.com/v1/playlists/${playlistID}/tracks?uris=${playlistToSend.tracks}`, {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer 1POdFZRZbvb...qqillRxMr2z',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'uris': [
            'string'
          ],
          'position': 0
        })
      });


    }
    addTracksToPlaylist()



  }
  return (
    <FontAwesomeIcon role='button' icon={faSpotify} className={styles.spotify} onClick={sendToSpotify} />
  )
}