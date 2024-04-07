import React from 'react'
import styles from '../Track/Track.module.css'
import RemoveButton from '../RemoveButton/RemoveButton'

export default function NewTrack({ track, setNewPlaylist }) {
  
  function deleteTrack(e) {
    e.preventDefault();
    const trackToDelete = e.target.parentNode;

    setNewPlaylist(prevPlaylist => {
      const filteredTracks = prevPlaylist.tracks.filter(track => {
        return track.id !== trackToDelete.id;
      });

      return {
        ...prevPlaylist,
        tracks: filteredTracks
      };
    });
  }

  return (
    <div className={styles.liStyle} id={track.id} title={track.title}
      data-artist={track.artist} data-album={track.album} data-uri={track.uri}>
      {track.title} by {track.artist} <br />
      Album: {track.album}
      <RemoveButton deleteTrack={deleteTrack} />
    </div>

  )
}  