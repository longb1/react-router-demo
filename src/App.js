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
          <Route path="./pages/home.js"  element={Home}/>
          <Route path="./pages/about.js"  element={About}/>
          <Route path="./pages/contact.js"  element={Contact}/>
        </Routes>
        
      </div>
    </BrowserRouter>
    
  );
}

export default App;
