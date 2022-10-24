import React from 'react'
import './App.css'

import Navbar from './components/navbar.jsx';
import Header from './components/header.jsx';
import Table from './components/table.jsx';
import Footer from './components/footer.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Table />

      <Footer />
      
    </div>
  )
}

export default App;
