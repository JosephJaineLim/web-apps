import React from 'react';
import { Navbar,Sidebar,Videos} from './components';
import './App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className='app__body'>
        <Sidebar />
        <Videos />
      </div>
    </div>
  )
}

export default App