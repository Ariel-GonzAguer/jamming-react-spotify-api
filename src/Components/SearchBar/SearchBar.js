import React from 'react'
import styles from './SearchBar.module.css'

export default function SearchBar({ searchKey, setSearchKey }) {

  return (
    <section >
      <label htmlFor='qSearch'></label>
      <input className={styles.searchBarInput} type='text' name='qSearch' onChange={e => setSearchKey(e.target.value)} value={searchKey} placeholder='Search your song' />
    </section>
  )

}