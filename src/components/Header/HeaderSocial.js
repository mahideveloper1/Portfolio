import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiLeetcode} from 'react-icons/si'

const HeaderSocial = () => {
  return (
    <div className='header_socials'>

   <a  href="https://www.linkedin.com" target="_blank"><BsLinkedin/></a>
   <a href="https://github.com/" target="_blank"><FaGithub/></a>
   <a href="https://Leetcode.com" target="_blank"><SiLeetcode/></a>
    


    </div>
  )
}

export default HeaderSocial;