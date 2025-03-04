import React , {useState} from 'react';
import './App.css';
import './components/Header.js'
import './components/Footer.js'
import './pages/PartyMain.js'
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import PartyMain from './pages/PartyMain.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MyCharacterInfoPage from './pages/MyCharacterInfoPage'
import AddMyCharacterPage from './pages/AddMyCharacterPage';
import CertifyJewelPage from './pages/CertifyJewelPage';
import MyAccountPage from './pages/MyAccountPage.jsx';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="Main-header">
      <Header isLogin={isLogin} setIsLogin={setIsLogin}></Header>
      <div className="Main-center">
        <Routes>
          <Route path="/login" element={<LoginPage isLogin={isLogin} setIsLogin={setIsLogin}/>} />
          <Route path="/" element={<PartyMain/>} />
          <Route path="/mycharacter" element={<MyCharacterInfoPage/>}/>
          <Route path="/addmycharacter" element={<AddMyCharacterPage/>}/>
          <Route path="/certifyjewelpage" element={<CertifyJewelPage/>}/>
          <Route path="/MyAccountPage" element={<MyAccountPage/>}/>
          {console.log("app login test "+isLogin)}
        </Routes>
      </div>
      <div>
        <Footer className="Main-footer"></Footer>
      </div>
    </div>
    
  );
}

export default App;
