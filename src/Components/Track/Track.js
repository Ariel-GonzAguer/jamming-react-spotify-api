import React from 'react'
import AddButton from '../AddButton/AddButton'
import style from './Track.module.css'

export default function Track({ track, setTracks, setNewPlaylist }) {

  function addTrack(e) {
    e.preventDefault();
    const newTrack =
    {
      id: e.target.parentNode.id,
      title: e.target.parentNode.title,
      artist: e.target.parentNode.dataset.artist,
      album: e.target.parentNode.dataset.album,
      uri: e.target.parentNode.dataset.uri
    }

    setNewPlaylist(prevPlaylist => {
      if
        (prevPlaylist.tracks.find(track => track.id === newTrack.id)) {
        alert('Song added already!');
        return { ...prevPlaylist };
      } else {
        return {
          ...prevPlaylist,
          tracks: [...prevPlaylist.tracks, newTrack]
        };
      }
    });

    // setTracks(prevTrack => {
    //   const filteredTracks = prevTrack.filter(track => {
    //     return track.id !== newTrack.id;
    //   });
    //   return filteredTracks;
    // })
  }

  return (
    <div className={style.liStyle} id={track.id} title={track.name}
      data-artist={track.artists[0].name} data-album={track.album.name} data-uri={track.uri}>
      {track.name} by {track.artists[0].name} <br />
      Album: {track.album.name}
      <AddButton addTrack={addTrack} />
    </div>
  )
}