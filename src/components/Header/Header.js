import React from "react";
import CTA from "./CTA";
import "./header.css";
import Profile from "../../assest/profile2.jpg";
// import ME from "../../assest/me.png";

import HeaderSocial from "./HeaderSocial";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h4>Hello I , am</h4>
        <div className="Name">
          <h1> Mahesh Vashisth</h1>
        </div>

        <h4 className="text-light">Fullstack Developer</h4>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img className="photo" src={Profile} alt="Profile" />
        </div>

        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
