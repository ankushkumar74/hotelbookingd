import React from 'react'
import './contact.css'

import {AiOutlineMail} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import {BiPhoneCall} from 'react-icons/bi'
import { useRef } from 'react';
import emailjs from 'emailjs-com' 

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9n5gzxl','template_ysf1vfn', form.current, '2gtTv1U4Fc2RGQAMB')
    
    e.target.reset()
  };

  return (

    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

       <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">

            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>abhishek321kumar321singh@gmail.com</h5>
            <a href="mailto:abhishek321kumar321singh@gmail.com" target='_blank'>
              Send a Message
            </a>
          </article>

          <article className="contact__option">

            <BiPhoneCall className='contact__option-icon'/>
            <h4>Message</h4>
            <h5>Talk with Me</h5>
            <a href="tel:+919778746469" target='_blank'>
              Make a Phone Call
            </a>
          </article>

          <article className="contact__option">

            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+91-9778746469</h5>
            <a href="https://api.whatsapp.com/send?phone+91-9778746469" target='_blank'>
              Send a Message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type='Text' name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name='message' rows="7" placeholder='Your Message' required/>
          <button type='submit' className='btn btn-primary'>Send Message</button>

        </form>
       </div>
    </section>
  )
}

export default Contact