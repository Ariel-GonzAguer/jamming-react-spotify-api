import React from 'react'
import styles from './Modal.module.css'

export default function Modal({ setOpen }) {

  const modal = {
    text: 'Song added already!',
    close: 'Got it!',
  }

  return (
    <>
      <dialog className={styles.modal} open>
        <p>{modal.text}</p>
        <button onClick={() => setOpen(false)} className={styles.close}>{modal.close}</button>
      </dialog>

    </>
  )
}