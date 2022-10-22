import React from 'react'
import './App.css'

import Navbar from './components/navbar.jsx';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Report from './components/report.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Report />

      <Footer />
      
    </div>
  )
}

export default App;
