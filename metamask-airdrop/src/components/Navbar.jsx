import React from 'react';
import './Navbar.css';
import { useState} from 'react';

const Navbar = () => {
  const [tabSelected, settabSelected] = useState(1);
  
  return (
    <div className="app__navbar-container"> 
        <a href="#step1"><div className='app__navbar-tab' onClick={() => settabSelected(1)} style={tabSelected === 1 ? {backgroundColor: 'orange'} : {backgroundColor: 'black'}}>1</div></a>
        <div style={{width:'50px', height:'5px',backgroundColor:'black', zIndex:'-1'}}/>
        <a href="#step2"><div className='app__navbar-tab' onClick={() => settabSelected(2)} style={tabSelected === 2 ? {backgroundColor: 'orange'} : {backgroundColor: 'black'}}>2</div></a>
        <div style={{width:'50px', height:'5px',backgroundColor:'black', zIndex:'-1'}}/>
        <a href="#step3"><div className='app__navbar-tab' onClick={() => settabSelected(3)} style={tabSelected === 3 ? {backgroundColor: 'orange'} : {backgroundColor: 'black'}}>3</div></a>
        <div style={{width:'50px', height:'5px',backgroundColor:'black', zIndex:'-1'}}/>
        <a href="#step4"><div className='app__navbar-tab' onClick={() => settabSelected(4)} style={tabSelected === 4 ? {backgroundColor: 'orange'} : {backgroundColor: 'black'}}>4</div></a>
        <div style={{width:'50px', height:'5px',backgroundColor:'black', zIndex:'-1'}}/>
        <a href="#step5"><div className='app__navbar-tab' onClick={() => settabSelected(5)} style={tabSelected === 5 ? {backgroundColor: 'orange'} : {backgroundColor: 'black'}}>5</div></a>
    </div>
  )
}

export default Navbar