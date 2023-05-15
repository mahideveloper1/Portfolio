import React from 'react'
import './Footer.css'
import {MdWhatsapp} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {FaTwitterSquare} from 'react-icons/fa'



const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Mahesh</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://WhatsApp.com"><MdWhatsapp/></a>
        <a href="https://www.linkedin.com/in/mahesh-v-25901b252"><BsLinkedin/></a>
        <a href="https://twitter.com/Mahesh81204968?t=L6WekFyfy05A49MJzXzJ5Q&s=08"><FaTwitterSquare/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Developed by Mahesh</small>

      </div>
    </footer>
  )
}

export default Footer
