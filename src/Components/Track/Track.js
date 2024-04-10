import React, { useState } from 'react'
import AddButton from '../AddButton/AddButton'
import Modal from '../Modal/Modal'
import style from './Track.module.css'

export default function Track({ track, setNewPlaylist }) {
  const [open, setOpen] = useState(false);

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
      if (prevPlaylist.tracks.find(track => track.id === newTrack.id)) {
        setOpen(true);
        return { ...prevPlaylist };
      } else {
        return {
          ...prevPlaylist,
          tracks: [...prevPlaylist.tracks, newTrack]
        };
      }
    });
  }

  return (
    <>
      {open && (
        <Modal setOpen={setOpen} />
      )
      }

      <div className={style.liStyle} id={track.id} title={track.name}
        data-artist={track.artists[0].name} data-album={track.album.name} data-uri={track.uri}>
        {track.name} by {track.artists[0].name} <br />
        Album: {track.album.name}
        <AddButton addTrack={addTrack} />
      </div>
    </>
  )
}