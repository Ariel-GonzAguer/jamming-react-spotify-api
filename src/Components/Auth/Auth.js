import React, {useEffect, useState} from 'react'
import styles from './Auth.module.css'

export default function Auth({ setAccessToken, accessToken }) {
  const CLIENT_ID = '2c18d86a1acd402fa4ff8ea866ac5864';
  const REDIRECT_URI = 'http://localhost:3000';
  const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
  const RESPONSE_TYPE = 'token';

  useEffect(() => {
    let token = window.localStorage.getItem('token');
    window.localStorage.setItem('token', accessToken);

    if (!token) {
      const urlParams = new URLSearchParams(window.location.hash.replace('#', '?'));
      const ACCESS_TOKEN = urlParams.get('access_token');
      token = ACCESS_TOKEN;
      setAccessToken(token);
    }

    
  }, [accessToken]);

  function logout(e) {
    e.preventDefault();
    setAccessToken('');
    window.localStorage.setItem('token', null);
  }

  return (
    <>
      {!accessToken
        ? <a className={styles.logIn} href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login</a>
        : <button className={styles.logOut} onClick={logout}>LogOut</button>
      }
    </>
  )
}