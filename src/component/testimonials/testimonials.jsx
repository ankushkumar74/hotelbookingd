import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'

import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>
        Review from clients
      </h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
              <img src={AVTR1} alt="Avatar One"/>
          </div>
          <h5 className='client__name'>Jigyanshu Raj</h5>

          <small className='client__review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nulla voluptatum optio neque alias accusamus vel iste, quo ex sequi beatae quis sapiente deleniti, dignissimos eum quaerat ipsum dolorum. Similique!</small>

        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
              <img src={AVTR2} alt="Avatar One"/>
          </div>
          <h5 className='client__name'>Jigyanshu Raj</h5>

          <small className='client__review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nulla voluptatum optio neque alias accusamus vel iste, quo ex sequi beatae quis sapiente deleniti, dignissimos eum quaerat ipsum dolorum. Similique!</small>

        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
              <img src={AVTR3} alt="Avatar One"/>
          </div>
          <h5 className='client__name'>Jigyanshu Raj</h5>

          <small className='client__review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nulla voluptatum optio neque alias accusamus vel iste, quo ex sequi beatae quis sapiente deleniti, dignissimos eum quaerat ipsum dolorum. Similique!</small>

        </SwiperSlide>

        

        
      
      </Swiper>
    </section>
  )
}

export default testimonials