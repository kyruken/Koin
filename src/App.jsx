import React from 'react';
import './App.css';

import Navbar from './components/navbar.jsx';
import Footer from './components/footer.jsx';

import AboutUs from './components/aboutus.jsx';
import Alternatives from './components/alternatives.jsx';
import Coinpage from './components/coinpage.jsx';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import data from './data.js';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Coinpage />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/alternatives' element={<Alternatives />} />
          {/* <Coinpage /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
