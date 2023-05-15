import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assest/portfolio1.jpg'
import IMG2 from '../../assest/portfolio2.jpg'
import IMG3 from '../../assest/portfolio3.jpg'
import IMG4 from '../../assest/portfolio4.jpg'
import IMG5 from '../../assest/portfolio5.png'
// import IMG6 from '../../assest/portfolio6.jpg'

const data =[
  {
    id: 1,
    image:IMG1,
    title:'Text Manipulator',
    github: 'https://github.com/MaheshVashisth/Word-Manipulater',
    demo:'https://loquacious-daffodil-aa4cb0.netlify.app/'
  },
  {
id:2,
image:IMG2,
title:'Web-Chatting App',
github:'https://github.com/MaheshVashisth/Web-Chatting-app',
demo:'https://github.com/MaheshVashisth/Web-Chatting-app'
},
{
  id:3,
  image:IMG3,
  title:'E-commerce site',
  github:'https://github.com/MaheshVashisth/E-commerce',
  demo:'https://github.com/MaheshVashisth/E-commerce'
},
{
  id:4,
  image:IMG4,
  title:'Food Delivery site',
  github:'https://github.com/MaheshVashisth/Food-Delivery-website',
  demo:'https://github.com/MaheshVashisth/Food-Delivery-website'
},
{
  id:5,
  image:IMG5,
  title:'Static-Page',
  github:'https://github.com/MaheshVashisth/Fitness-page',
  demo:'https://github.com/MaheshVashisth/Fitness-page'
},
// {
//   id:6,
//   image:IMG6,
//   title:'Charts templates & infographics in Figma',
//   github:'https://github.com',
//   demo:'https://dribble.com/shots/15887665-Orion-UI-kit-Charts-templates-infographics-in-Figma'
// }
]
const Project = () => {
  return (
   <section id='portfolio'>
    <h5>My recent work</h5>
    <h2>Portfolio</h2>
    <div className='container portfolio__container'>
      {
        data.map(({id, image, title, github, demo})=>{
          return(
      <article  key={id} className='portfolio__item'>
        <div className='portfolio__item-image'>
         <img src={image} alt={title} />
        </div>
        <h3>{title}</h3>
        <div className='portfolio__item-cta'>
          <a href={github} className='btn'>Github</a>
        <a href={demo} className='btn btn-primary' target='_blank'>LiveDemo</a>
        </div>
      </article>
        )})
      }
     </div>

   </section>
  )
}

export default Project
