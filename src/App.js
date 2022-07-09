import './App.css';
import About from './pages/about';
import Contact from './pages/contact';
import Home from './pages/home';
import NavBar from './pages/navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React from 'react';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Routes>
          
          <Route path="/" element={<Home/>}/>
          <Route path="/pages/about"  element={<About/>}/>
          <Route path="/pages/contact"  element={<Contact/>}/>
        </Routes>
        
      </div>
    </BrowserRouter>
    
  );
}

export default App;
