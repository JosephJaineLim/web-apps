import React from 'react'
import './Step1.css'
import pic1 from '../assets/pic1.png'
import pic2 from '../assets/pic2.png'
import cursor from '../assets/cursor.png'

const Step1 = () => {
  return (
    <div className='app__step1' id='step1'>
      <div className='app__step1-container'>
        <img src={pic1} alt='pic1'/>
        <p>Deposit $MATIC</p>
        <img src={cursor} alt='cursor' className='left'/>
      </div>
      <div className='app__step1-container'>
        <img src={pic2} alt='pic2'/>
        <p>Swap into any stablecoin</p>
        <img src={cursor} alt='cursor' className='right'/>
      </div>
    </div>
  )
}

export default Step1