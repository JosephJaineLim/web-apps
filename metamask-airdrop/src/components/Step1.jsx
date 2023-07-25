import React from 'react'
import './Step1.css'
import pic1 from '../assets/pic1.png'
import cursor from '../assets/cursor.png'

const Step1 = () => {
  return (
    <div className='app__step1' id='step1'>
      <div className='app__step1-container'>
        <img src={pic1} alt='pic1'/>
        <p>Deposit $MATIC to a Polygon Wallet</p>
        <img src={cursor} alt='cursor' />
      </div>
      <div className='app__step1-container'>
        <img src={pic1} alt='pic1'/>
        <p>Swap into any stablecoin</p>
        <img src={cursor} alt='cursor' />
      </div>
    </div>
  )
}

export default Step1