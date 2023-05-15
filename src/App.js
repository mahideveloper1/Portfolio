import React from 'react';
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'; 
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
// import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Portfolio/>
    {/* <Testimonials/> */}
    <Contact/>
    <Footer/>
    </div>
  )
}

export default App