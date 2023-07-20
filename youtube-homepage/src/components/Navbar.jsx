import React from 'react';
import './Navbar.css';
import {GiHamburgerMenu} from 'react-icons/gi';
import {BsFillMicFill, BsFillBellFill, BsFillCameraVideoFill } from 'react-icons/bs';
import {HiMagnifyingGlass} from 'react-icons/hi2';
import {FaFaceGrinHearts} from 'react-icons/fa6'
import {useState} from 'react';
import {IconOverlay} from '../container';

const Navbar = () => {
  const [isInputSelected, setisInputSelected] = useState(false);
  const [isSearchSelected, setIsSearchSelected] = useState (false);
  const [isVoiceSelected, setIsVoiceSelected] = useState (false);
  const [isCreateSelected,setisCreateSelected] = useState (false);
  const [isNotifSelected,setisNotifSelected] = useState (false);
  return (
    <nav className='app__navbar'>
      <div className="app__navbar-left">
        <GiHamburgerMenu size='18px'/>
        <h1>MeTube</h1>
      </div>
      <div className="app__navbar-center">
        <form>
          <input type="text" placeholder='Search' onFocus={()=>setisInputSelected(true)} onBlur={()=>setisInputSelected(false)}/>
          {isInputSelected && <HiMagnifyingGlass size='20px' className='input-glass'/>}
          <div className='icon-container' onMouseOver={() => setIsSearchSelected(true)} onMouseOut={() => setIsSearchSelected(false)}>
            <div className='center-button'><HiMagnifyingGlass size='24px'/></div>
            {isSearchSelected && <IconOverlay text='Search'/>}
          </div>
        </form>
        <div className='icon-container' onMouseOver={() => setIsVoiceSelected(true)} onMouseOut={() => setIsVoiceSelected(false)}>
          <div className="center-circle">
            <BsFillMicFill />
          </div>
          {isVoiceSelected && <IconOverlay text='Search with your voice'/>}
        </div>
      </div>
      <div className="app__navbar-right">
        <div className='icon-container' onMouseOver={() => setisCreateSelected(true)} onMouseOut={() => setisCreateSelected(false)}>
          <div className="right-circle">
            <BsFillCameraVideoFill size='18px' />
          </div>
          {isCreateSelected && <IconOverlay text='Create' />}
        </div>
        <div className='icon-container' onMouseOver={() => setisNotifSelected(true)} onMouseOut={() => setisNotifSelected(false)}>
          <div className="right-circle">
            <BsFillBellFill size='18px' />
          </div>
          {isNotifSelected && <IconOverlay text='Notification' />}
        </div>
        <FaFaceGrinHearts size='24px' className='right-icon'/>
      </div>
    </nav>
  )
}

export default Navbar