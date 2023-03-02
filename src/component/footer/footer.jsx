import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>MY PROFILE</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#Testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact Me</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><BsFacebook /></a>
        <a href="https://instagram.com"><BsInstagram /></a>
        <a href="https://twitter.com"><BsFacebook /></a>
      </div>
    </footer>
  )
}

export default footer