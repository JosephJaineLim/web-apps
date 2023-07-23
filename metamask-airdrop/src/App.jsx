import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';

const App = () => {
  return (
    <div className='main'>
      <Header />
      <Navbar />
    </div>
  )
}

export default App