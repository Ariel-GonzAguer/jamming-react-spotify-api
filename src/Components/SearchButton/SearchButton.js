import React from 'react'
import styles from './SearchButton.module.css'

export default function SearchButton(props) {
  return (
    <button className={styles.btnSubmit} onClick={props.handleSubmit}>Search</button>
  )
}