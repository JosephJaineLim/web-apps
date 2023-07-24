import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import {Step1,Step2,Step3,Step4,Step5} from './components'

const App = () => {
  return (
    <div className='main'>
      <Header />
      <Navbar />

      <div className='page-container'>
        <Step1 />
        <Step2 />
        <Step3 />
        <Step4 />
        <Step5 />
      </div>
    </div>
  )
}

export default App