import React from 'react';
import './Sidebar.css';
import {GoHomeFill} from 'react-icons/go';
import {AiFillPlaySquare} from 'react-icons/ai';
import {categories} from '../constants';

const Sidebar = () => {
  return (
    <div className='app__sidebar'>
      {categories.map(el => (
        <div className='app__sidebar-category'>
          <p>{el}</p>
        </div>
      ))}
    </div>
  )
}

export default Sidebar