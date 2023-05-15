import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {MdWhatsapp} from 'react-icons/md'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'

function Contact() {

const form = useRef();
const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a8052ah', 'template_tyn26y8', form.current, '_zrlSQ28sYH5bUR6G')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
             <h5>maheshvashisth1111@gmail.com</h5>
             <a href="mailto:maheshvashisth1111@gmail.com">send a message</a>
          </article>
          <article className='contact__option'>
            <MdWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
             <h5>+919817611481</h5>
             <a href="https://api.whatsapp.com/send?phone=+919817611481">send a message</a>
          </article>
          
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your full name' required />
            <input type="email" name='email' placeholder='Your Email' required />
            <textarea type="message" rows="7" placeholder='Your Message' required />
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
      </div>
    </section>
  )
}

export default Contact
