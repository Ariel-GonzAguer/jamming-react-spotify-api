import React from 'react'
import AddButton from '../AddButton/AddButton'
import style from './Track.module.css'

export default function Track({track, addSong}) {
  return (
    <div className={style.liStyle}>
      Song:{track.name}-
      Artist:{track.artists[0].name}-
      Album:{track.album.name}-
      <AddButton addSong={addSong} track={track} />
      </div>
  )
}