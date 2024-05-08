import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const HeaderSocial = () => {
  return (
    <div className="header_socials">
      <a
        href="https://www.linkedin.com/in/mahesh-vashisth-25901b252"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/mahideveloper1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
      <a
        href="https://twitter.com/Mahesh03976992"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitterSquare />
      </a>
    </div>
  );
};

export default HeaderSocial;
