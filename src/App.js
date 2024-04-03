import React from'react'
import styles from './App.module.css'
import Header from './Components/Header/Header'
import BigContainer from './Components/BigContainer/BigContainer'
import Footer from './Components/Footer/Footer'


function App() {
  return (
  <div>
    <Header />
    <BigContainer />
    <Footer className={styles.footer} />
    </div>
  );
}

export default App;
