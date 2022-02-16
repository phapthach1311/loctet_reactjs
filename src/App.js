import './App.css';
import data from './data'
import React ,{useState, useEffect} from 'react'
import Home from './Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Loctet from './Loctet';

function App() {
  
  return (
    <Router>
        <Routes>
          <Route path='/' element = {<Home />} />
          <Route path='/loctet' element = {<Loctet />} />
        </Routes>
    </Router>
  
  );
}

export default App;
