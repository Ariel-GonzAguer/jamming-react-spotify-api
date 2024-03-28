import React, { useState } from 'react'
import styles from './SearchBar.module.css'

export default function SearchBar() {
  const [search, setSearch] = useState('');


  function handleChange(e) {
    setSearch(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(search)
    // hacer busqueda
    setSearch('');
  }

  return (
    <section className={styles.searchBarSection}>
      <label htmlFor='qSearch'></label>
      <input className={styles.searchBarInput} type='search' name='qSearch' onChange={handleChange} value={search} placeholder='Search your song' />
      <button className={styles.btnSubmit} onClick={handleSubmit}>Search</button>
    </section>
  )

}