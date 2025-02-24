import React from 'react';
import './App.css';
import './components/Header.js'
import './components/Footer.js'
import './components/PartyMain.js'

import Header from './components/Header.js';
import Footer from './components/Footer.js';
import PartyMain from './components/PartyMain';
function App() {
  return (
    <div className="Main">
      <Header></Header>
      <div className="Main-center">
      <PartyMain></PartyMain>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
