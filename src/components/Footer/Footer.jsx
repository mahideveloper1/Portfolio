import React from "react";
import "./Footer.css";
import { MdWhatsapp } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Mahesh Vashisth
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="portfolio">Portfolio</a>
        </li>
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://WhatsApp.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MdWhatsapp />
        </a>
        <a
          href="https://www.linkedin.com/in/mahesh-vashisth-25901b252"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://twitter.com/Mahesh03976992"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitterSquare />
        </a>
        <a
          href="https://github.com/mahideveloper1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Developed by Mahesh Vashisth</small>
      </div>
    </footer>
  );
};

export default Footer;
