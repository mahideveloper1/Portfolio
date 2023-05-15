import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'

const HeaderSocial = () => {
  return (
    <div className='header_socials'>

   <a  href="https://www.linkedin.com/in/mahesh-v-25901b252" target="_blank"><BsLinkedin/></a>
   <a href="https://github.com/MaheshVashisth" target="_blank"><FaGithub/></a>
   <a href="https://twitter.com/Mahesh81204968?t=L6WekFyfy05A49MJzXzJ5Q&s=08" target="_blank"><FaTwitterSquare/></a>
    


    </div>
  )
}

export default HeaderSocial;