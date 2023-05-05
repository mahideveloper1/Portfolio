import React from 'react';
import "./about.css";
import Me from '../../assest/me-about.jpg'
import {SiLeetcode} from 'react-icons/si'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id ='about'>
    
    <h5>Get To Know</h5>
    <h2> About Me</h2>
    
    

    <div className="container about_container">
      <div className="about_me">
         <div className="about_me-image">
          <img src={Me} alt="Me" />
         </div>
      </div>
      <div className="about_content">
        <div className="about_cards">
          <article className='about_card'> 
          <SiLeetcode className='about_icon'/>
          <h5>Leetcode</h5>
          <small>200+ Questions</small>
          </article>
          <article className='about_card'> 
          <FaAward className='about_icon'/>
          <h5>Leetcode</h5>
          <small>200+ Questions</small>
          </article>
          <article className='about_card'> 
          <VscFolderLibrary className='about_icon'/>
          <h5>Projects</h5>
          <small>2+ Completed</small>
          </article>
        </div>
         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, nostrum assumenda perferendis vitae quaerat, iure, consequuntur officiis rem recusandae nesciunt tempore porro aliquam corrupti nisi itaque qui numquam quibusdam hic.</p>
          <a href="#contact" className='btn btn-primary'>Contact Me..</a>
      </div>
    </div>

      
    </section>
  )
}

export default About