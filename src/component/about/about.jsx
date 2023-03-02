import React from 'react'
import './about.css'
import ME from '../../assets/mine2.jpg'
import {FaAward} from 'react-icons/fa'
import {BsPersonPlus} from 'react-icons/bs'
import {FaProjectDiagram} from 'react-icons/fa'
const about = () => {
  return (
    
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>
        About Me
      </h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About Image"/>
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small> 3+ Years   Working</small>
            </article>

            <article className='about__card'>
              <BsPersonPlus className='about__icon'/>
              <h5>Clients</h5>

              <small> 15+ Clients</small>
            </article>

            <article className='about__card'>
              <FaProjectDiagram className='about__icon'/>
              <h5>Projects</h5>
              <small> 40+ Completed Projects</small>
            </article>
            </div>

            <p>
            Having a Simple and Professional Attitide. Always ready to accept any Challenge. I accept the failure to rise up with more Acceleration.
            Always used to be a Tech Lover from Birth. Having a great interest in Hardware and Networking, I Love to
deal with all kinds of Computer Related work and
troubleshooting in Windows. Also Have a Brief
Knowledge with regards to Front-end Web
Development (React, Html, Css). <br/>
Learning new things is my Passion. I used to do any work with my 100% effort. I am fond of programming and all sorts of graphics works. Always in a step to move forward for my goal.
            </p>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
            </div> 
      </div>
    </section>
  )
}

export default about