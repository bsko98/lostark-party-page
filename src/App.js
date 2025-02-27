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

function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="Main-header">
      <Header isLogin={isLogin} setIsLogin={setIsLogin}></Header>
      <div className="Main-center">
        <Routes>
          <Route path="/login" element={<LoginPage isLogin={isLogin} setIsLogin={setIsLogin}/>} />
          <Route path="/" element={<PartyMain/>} />
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
