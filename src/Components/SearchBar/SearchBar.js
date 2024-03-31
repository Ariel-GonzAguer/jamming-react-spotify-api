import React from 'react'
import styles from './SearchBar.module.css'

export default function SearchBar({ search, handleChange }) {

  return (
    <section >
      <label htmlFor='qSearch'></label>
      <input className={styles.searchBarInput} type='text' name='qSearch' onChange={handleChange} value={search} placeholder='Search your song' />
    </section>
  )

}