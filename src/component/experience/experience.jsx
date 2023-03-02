import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
const experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">

        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className='experience__content'>
          <article className='experience_details'>
            <BsPatchCheckFill className="experience_details-icon"/>
            <div>
            <h4>HTML</h4>
            <small className='text-light'>Intermediate</small>
          
              </div>
              </article>
          <article className='experience_details'>
            <BsPatchCheckFill className="experience_details-icon"/>
            <div>
            <h4>CSS</h4>
            <small className='text-light'>Intermediate</small>
         
            </div>
             </article>
          <article className='experience_details'>
            <BsPatchCheckFill className="experience_details-icon"/>
            <div>
            <h4>Javascript</h4>
            <small className='text-light'>Intermediate</small>
          
            </div>
            </article>
          <article className='experience_details'>
            <BsPatchCheckFill className="experience_details-icon"/>
            <div>
            <h4>React</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience_details'>
            <BsPatchCheckFill className="experience_details-icon"/>
            <div>
            <h4>Bootstrap</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience_details'>
            <BsPatchCheckFill className="experience_details-icon"/>
            <div>
            <h4>Figma</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>

          </div>
        </div>
        <div className="graphic_design">
        <h3>Graphic Designing</h3>
        <div className='experience__content'>

          <article className='experience_details'>
            <BsPatchCheckFill className="experience_details-icon"/>
            <div>
            <h4>Adobe Photoshop</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience_details'>
            <BsPatchCheckFill className="experience_details-icon"/>
            <div>
            <h4>Adobe Illustrator</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience_details'>
            <BsPatchCheckFill className="experience_details-icon"/>
           <div>
           <h4>Premier Pro</h4>
            <small className='text-light'>Intermediate</small>
           </div>
          </article>
          <article className='experience_details'>
            <BsPatchCheckFill className="experience_details-icon"/>
            <div>
            <h4>Canva</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
          

          </div>
        </div>
      </div>
    </section>
  )
}

export default experience