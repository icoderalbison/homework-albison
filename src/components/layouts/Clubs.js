import React from 'react'
import { Link } from 'react-router-dom';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import StudentData from './StudentData.json';

function Clubs() {

    const[data, data2, data3] = StudentData;

  return (
    <div>
      <h1>Clubs</h1>
        <div className="pagecha">
            <div className="slidePart">
            <div className="slider">
              {/* Slides */}
              <div className="slider">
                  <div class="swiper-wrapper">
                    <Swiper className='slide'
                      spaceBetween={50}
                      slidesPerView={1}
                      onSlideChange={() => console.log('slide change')}
                      onSwiper={(swiper) => console.log(swiper)}
                    >
                      <SwiperSlide className='slide'>
                        <img src={ `assets/media/layoutImages/${data2.img}`} alt="" />
                      </SwiperSlide>
                      <SwiperSlide className='slide'>
                        <img src={ `assets/media/layoutImages/${data2.img2}`} alt="" />
                      </SwiperSlide>
                      <SwiperSlide className='slide'>
                        <img src={ `assets/media/layoutImages/${data2.img3}`} alt="" />
                      </SwiperSlide>
                    </Swiper>
                    
                </div>

                </div>
            </div>
            <h1>{data2.title}</h1>
            <p> {data2.text2} </p>
            <p> {data2.text1} </p>
          </div>

          <div className="navbar">

            <ul className='sections'>
              <Link to="/Section1" ><li><span>|</span> {data2.sec1}</li></Link>
              <Link to="/Section2" ><li><span>|</span> {data2.sec2}</li></Link>
              <Link to="/Section3" ><li><span>|</span> {data2.sec3}</li></Link>
              <Link to="/Section4" ><li><span>|</span> {data2.sec4}</li></Link>
            </ul>

          </div>
        </div>
    </div>
  )
}
export default Clubs
