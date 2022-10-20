import React from 'react'
import './App.css'

import Navbar from './components/navbar.jsx';
import Footer from './components/footer.jsx';
import Report from './components/report.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Report />


      <Footer />
    </div>
  )
}

export default App;
