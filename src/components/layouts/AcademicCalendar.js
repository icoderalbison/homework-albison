import React from 'react'
import { Link } from 'react-router-dom';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import StudentData from './StudentData.json';

function AcademicCalendar() {
    const[data, data2, data3] = StudentData;

  return (
    <div>
        <div className="pagecha">
          <div className="slidePart">
              <div className="slider">
                <div class="swiper-wrapper">
                    <Swiper className='slide'
                      spaceBetween={50}
                      slidesPerView={1}
                      // onSlideChange={() => console.log('slide change')}
                      // onSwiper={(swiper) => console.log(swiper)}
                    >
                      <SwiperSlide className='slide'>
                        <img src={ `assets/media/layoutImages/${data3.img}`} alt="" />
                      </SwiperSlide>
                      <SwiperSlide className='slide'>
                        <img src={ `assets/media/layoutImages/${data3.img2}`} alt="" />
                      </SwiperSlide>
                      <SwiperSlide className='slide'>
                        <img src={ `assets/media/layoutImages/${data3.img3}`} alt="" />
                      </SwiperSlide>
                    </Swiper>
                </div>
              </div>
            <h1>{data3.title}</h1>
            <p>{data3.text2}</p>
            <p>{data3.text1}</p>
          </div>

          <div className="navbar">
            <ul className='sections'>
              <Link to="/Section1" ><li><span>|</span> Section1</li></Link>
              <Link to="/Section2" ><li><span>|</span> Section2</li></Link>
              <Link to="/Section3" ><li><span>|</span> Section3</li></Link>
              <Link to="/Section4" ><li><span>|</span> Section4</li></Link>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default AcademicCalendar