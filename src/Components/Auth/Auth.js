import React, {useEffect} from 'react'
import styles from './Auth.module.css'

export default function Auth({ setAccessToken, accessToken }) {
  
  const CLIENT_ID = '2905f8a42cf843879f1c2770f312adb2';
  const REDIRECT_URI = 'http://localhost:3000';
  const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
  const RESPONSE_TYPE = 'token';
  const accessUrl = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&response_type=${RESPONSE_TYPE}&scope=playlist-modify-public&redirect_uri=${REDIRECT_URI}`;

  useEffect(() => {
    let token = window.localStorage.getItem('token');
    window.localStorage.setItem('token', accessToken);

    if (!token) {
      const urlParams = new URLSearchParams(window.location.hash.replace('#', '?'));
      const ACCESS_TOKEN = urlParams.get('access_token');
      token = ACCESS_TOKEN;
      setAccessToken(token);
    }
  }, [accessToken, setAccessToken]);

  function logout(e) {
    e.preventDefault();
    setAccessToken('');
    window.localStorage.setItem('token', null);
  }

  return (
    <>
      {!accessToken
        ? <a className={styles.logIn} href={accessUrl}>Login</a>
        : <button className={styles.logOut} onClick={logout}>LogOut</button>
      }
    </>
  )
}