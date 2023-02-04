import React from 'react'
import './main.css'
import Twitter from '../Assest/TwitterIcon.png'
import Instagram from '../Assest/InstagramIcon.png'
import Linkedin from '../Assest/LinkedinIcon.png'
import GitHub from '../Assest/GitHubIcon.png'

function Footer() {
  return (
    <>
    <div className="footer container">
        <a href="https://twitter.com/Samsonaderonmu"><img src={Twitter} alt=""  className='twitter' /></a>
        <a href="https://www.instagram.com/superior_codes_/"><img src={Instagram} alt=""  className='instagram'/></a>
        <a href="https://www.linkedin.com/in/samsonaderonmu/"><img src={Linkedin} alt="" className='linkedin' /></a>
        <a href="https://github.com/superior212"><img src={GitHub} alt=""  className='github'/></a>
    </div>
    </>
  )
}

export default Footer