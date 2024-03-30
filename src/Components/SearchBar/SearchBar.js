import React from 'react'
import styles from './SearchBar.module.css'

export default function SearchBar(props) {

  return (
    <section >
      <label htmlFor='qSearch'></label>
      <input className={styles.searchBarInput} type='text' name='qSearch' onChange={props.handleChange} value={props.search} placeholder='Search your song' />
    </section>
  )

}