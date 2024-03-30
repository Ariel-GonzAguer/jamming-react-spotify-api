import React, { useState, useEffect } from 'react'
import styles from './BigContainer.module.css'
import SearchBar from '../SearchBar/SearchBar'
import SearchButton from '../SearchButton/SearchButton'
import ResultsSubContainer from '../ResultsSubContainer/ResultsSubContainer'
import MyPlaylistSubContainer from '../MyPlaylistSubContainer/MyPlaylistSubContainer'
import SaveToSpotifyButton from '../SaveToSpotifyButton/SaveToSpotifyButton'
import ResetPlaylist from '../ResetPlaylist/ResetPlaylist'
import NameYourPlaylist from '../NameYourPlayList/NameYourPlaylist'


export default function BigContainer() {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [newPlaylist, setNewPlaylist] = useState([]);
  const [namePlaylist, setNamePlaylist] = useState('Your New Playlist');
  const [readyToSendPlaylist, setReadyToSendPlaylist] = useState({ name: '', songs: [] });

  useEffect(() => {
    if (readyToSendPlaylist.lenght > 0) {
      console.log(readyToSendPlaylist);
    }
  }, [readyToSendPlaylist]);

  function handleChange(e) {
    setSearch(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    // const response = await fetch('spotify.com');
    // const data = await response.json();

    // setSearchResults(data);

    setSearchResults([
      {
        id: 1,
        title: "Shape of You",
        artist: "Ed Sheeran",
        album: "÷ (Divide)"
      },
      {
        id: 2,
        title: "Rolling in the Deep",
        artist: "Adele",
        album: "21"
      },
      {
        id: 3,
        title: "Uptown Funk",
        artist: "Mark Ronson ft. Bruno Mars",
        album: "Uptown Special"
      },
      {
        id: 4,
        title: "Despacito",
        artist: "Luis Fonsi ft. Daddy Yankee",
        album: "Vida"
      },
      {
        id: 5,
        title: "Shallow",
        artist: "Lady Gaga & Bradley Cooper",
        album: "A Star Is Born"
      },
      {
        id: 6,
        title: "Dance Monkey",
        artist: "Tones and I",
        album: "The Kids Are Coming"
      },
      {
        id: 7,
        title: "Closer",
        artist: "The Chainsmokers ft. Halsey",
        album: "Collage"
      },
      {
        id: 8,
        title: "Dynamite",
        artist: "BTS",
        album: "Dynamite"
      },
      {
        id: 9,
        title: "Bad Guy",
        artist: "Billie Eilish",
        album: "When We All Fall Asleep, Where Do We Go?"
      },
      {
        id: 10,
        title: "Old Town Road",
        artist: "Lil Nas X ft. Billy Ray Cyrus",
        album: "7"
      },
      {
        id: 11,
        title: "Hello",
        artist: "Adele",
        album: "25"
      },
      {
        id: 12,
        title: "Someone Like You",
        artist: "Adele",
        album: "21"
      },
      {
        id: 13,
        title: "Sicko Mode",
        artist: "Travis Scott",
        album: "Astroworld"
      },
      {
        id: 14,
        title: "Havana",
        artist: "Camila Cabello ft. Young Thug",
        album: "Camila"
      },
      {
        id: 15,
        title: "Girls Like You",
        artist: "Maroon 5 ft. Cardi B",
        album: "Red Pill Blues"
      },
      {
        id: 16,
        title: "See You Again",
        artist: "Wiz Khalifa ft. Charlie Puth",
        album: "Furious 7: Original Motion Picture Soundtrack"
      },
      {
        id: 17,
        title: "Thinking Out Loud",
        artist: "Ed Sheeran",
        album: "x (Multiply)"
      },
      {
        id: 18,
        title: "Sugar",
        artist: "Maroon 5",
        album: "V"
      },
      {
        id: 19,
        title: "Thank U, Next",
        artist: "Ariana Grande",
        album: "Thank U, Next"
      },
      {
        id: 20,
        title: "Party Rock Anthem",
        artist: "LMFAO ft. Lauren Bennett & GoonRock",
        album: "Sorry for Party Rocking"
      }
    ])
  }

  function addSong(e) {
    const newSong =
    {
      id: e.target.id,
      title: e.target.title,
      artist: e.target.dataset.artist,
      album: e.target.dataset.album
    }

    setNewPlaylist(prevPlaylist => {
      // con esta función solo se pueden agregar las canciones una vez a la lista
      if (prevPlaylist.find(song => song.id === newSong.id)) {
        return prevPlaylist;
      } else {
        return [...prevPlaylist, newSong]
      }
    })
  }

  function deleteSong(e) {
    const songToDelete = e.target.id;
    console.log('acá', songToDelete);
    setNewPlaylist(prev => prev.filter(song => song.id !== songToDelete));
  }

  function resetPlaylist(e) {
    setNewPlaylist([]);
  }

  function nameNewPlaylist(e) {
    setNamePlaylist(e.target.value);
  }

  function sendPlaylist() {
    if (newPlaylist.length > 0) {
      setReadyToSendPlaylist({ name: namePlaylist, songs: newPlaylist });
    } else {
      alert('empty playlist');
    }
  }

  return (
    <div className={styles.bigContainer}>

      <SearchBar search={search} handleChange={handleChange} />
      <SearchButton search={search} handleSubmit={handleSubmit} />

      <div className={styles.resNpla}>
        <ResultsSubContainer searchResults={searchResults} addSong={addSong} />
        <ResetPlaylist resetPlaylist={resetPlaylist} />
        <NameYourPlaylist nameNewPlaylist={nameNewPlaylist} />
        <SaveToSpotifyButton sendPlaylist={sendPlaylist} readyToSendPlaylist={readyToSendPlaylist} />
        <MyPlaylistSubContainer newPlaylist={newPlaylist} deleteSong={deleteSong} namePlaylist={namePlaylist} />
      </div>

    </div>
  )
}