import React from 'react' 
import './Testimonials.css' 
import AVTR1 from '../../assest/avatar1.jpg'
import AVTR2 from '../../assest/avatar2.jpg'
import AVTR3 from '../../assest/avatar3.jpg'
import AVTR4 from '../../assest/avatar4.jpg'

// import Swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
    {
        avatar:AVTR1,
        name: 'Tina Snow',
        review: 'fjjverj jj n th vnerjn erjn n rhn  n erjn c rjn   vfjngn n jfnikjvncxnvjer  df n  njncxk   fgjnkjernkjcxv kdf ncv   eb   h  v dekgkjf kjniurnvkn n hdfgdfvkjcx '
    },
    {
        avatar: AVTR2,
        name : 'Shatta Wale',
        review: 'fjjverj jj n th vnerjn erjn n rhn  n erjn c rjn   vfjngn n jfnikjvncxnvjer  df n  njncxk   fgjnkjernkjcxv kdf ncv   eb   h  v dekgkjf kjniurnvkn n hdfgdfvkjcx'
    },
    {
       avatar: AVTR3,
        name : 'Kwame Despite',
        review: 'fjjverj jj n th vnerjn erjn n rhn  n erjn c rjn   vfjngn n jfnikjvncxnvjer  df n  njncxk   fgjnkjernkjcxv kdf ncv   eb   h  v dekgkjf kjniurnvkn n hdfgdfvkjcx'
    },
    
    {
        avatar: AVTR4,
        name : 'ana mathew',
        review: 'fjjverj jj n th vnerjn erjn n rhn  n erjn c rjn   vfjngn n jfnikjvncxnvjer  df n  njncxk   fgjnkjernkjcxv kdf ncv   eb   h  v dekgkjf kjniurnvkn n hdfgdfvkjcx'
    },
]

const Testimonials = () => {
       
  return (
    <section id='testimonials'> 
    <h5> Review from clients</h5>
    <h2>Testimonials</h2>
    <Swiper className='container testimonials__container'
    modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      
    >
        { 
        data.map(({avatar, name, review}, index) => { 
            return(
        <SwiperSlide key={index} className='testimonial'>
            <div className='client__avatar'>
                <img src={avatar} alt="" />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
                    {review}
                </small>
            </SwiperSlide>
            )})}
    </Swiper>
    </section>
    )
}

export default  Testimonials
