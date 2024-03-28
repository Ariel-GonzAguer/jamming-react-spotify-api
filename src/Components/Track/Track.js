import React from 'react'
import AddButton from '../AddButton/AddButton'
import styles from './Track.module.css'


export default function Track(props) {


  return (
    <>
      <li className={styles.li} key={props.result.id}>{props.result.title} {props.result.artist} {props.result.album}
      <AddButton addSong={props.addSong} /></li>
    </>
  )
}