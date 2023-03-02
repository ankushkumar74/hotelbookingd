import React from 'react'
import './services.css'
import {BsCheck2Circle} from 'react-icons/bs'

const services = () => {
  return (
    <section id='services'>
      
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheck2Circle className='service__list-icon'/>
              <p>Designing using Figma</p>
            </li>
            <li>
              <BsCheck2Circle className='service__list-icon'/>
              <p>App structure using Flutterflow</p>
            </li><li>
              <BsCheck2Circle className='service__list-icon'/>
              <p>Adobe Xd</p>
            </li><li>
              <BsCheck2Circle className='service__list-icon'/>
              <p>Adobe Illustrator</p>
            </li><li>
              <BsCheck2Circle className='service__list-icon'/>
              <p>Wireframing and Prototyping</p>
            </li>
          </ul>
        </article>


        <article className='service'>
          <div className="service__head">
            <h3>Web-Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheck2Circle className='service__list-icon'/>
              <p>Html, CSS, Javascript</p>
            </li>
            <li>
              <BsCheck2Circle className='service__list-icon'/>
              <p>React.js Library</p>
            </li><li>
              <BsCheck2Circle className='service__list-icon'/>
              <p>Node.js</p>
            </li><li>
              <BsCheck2Circle className='service__list-icon'/>
              <p>Wordpress Development</p>
            </li>
            <li>
              <BsCheck2Circle className='service__list-icon'/>
              <p>Working with responsive layout</p>
            </li>
            
          </ul>
        </article>
        <article className='service'>
          <div className="service__head">
            <h3>Graphic Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheck2Circle className='service__list-icon'/>
              <p>Adobe Photoshop and it all Tools</p>
            </li>
            <li>
              <BsCheck2Circle className='service__list-icon'/>
              <p>Adobe Illustrator</p>
            </li><li>
              <BsCheck2Circle className='service__list-icon'/>
              <p>Canva</p>
            </li><li>
              <BsCheck2Circle className='service__list-icon'/>
              <p>Color grading</p>
            </li><li>
              <BsCheck2Circle className='service__list-icon'/>
              <p>Premier Pro</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default services