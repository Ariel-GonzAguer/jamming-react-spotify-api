import React, { useEffect, useState } from 'react'
import styles from './Header.module.css'


export default function Header() {
const [color, setColor] = useState('#db4648')

  useEffect(() => {
    const intervalM = setInterval( () => {
      setColor(color => 
      color === '#db4648'? 'white' : '#db4648'
      );
    }, 3000);

    return () => clearInterval(intervalM);
  },[]);



  return (
    <header className={styles.header}>
      <h1>Ja<span id='mmm' className={styles.mmm} style={{color}} >mmm</span>ing</h1>
    </header>
  )
}