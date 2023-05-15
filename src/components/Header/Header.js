import React from 'react'
import CTA from './CTA';
import "./header.css";
import ME from "../../assest/me.png";

import HeaderSocial from './HeaderSocial';

const Header = () => {
  return (
    <header>
     <div className="container header_container">
      <h5>
        Hello I , am
      </h5>
      <div className='Name'><h1> Mahesh</h1></div>
      
      <h5 className="text-light">Fullstack Developer</h5>
      <CTA/>
      <HeaderSocial/>
      <div className="me">
        <img  src={ME} alt="Profile" />
      </div>
      
      <a href="#contact" className="scroll_down">Scroll Down</a>
    
     </div>
     
    </header>
  )
}

export default Header;