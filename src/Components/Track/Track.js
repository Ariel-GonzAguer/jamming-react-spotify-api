import React from 'react'
import AddButton from '../AddButton/AddButton'
import styles from './Track.module.css'


export default function Track(props) {


  return (
    <li className={styles.li}>
      Song:{props.result.title}- 
      Artist:{props.result.artist}- 
      Album:{props.result.album} 
      <AddButton addSong={props.addSong} result={props.result} /></li>
  )
}