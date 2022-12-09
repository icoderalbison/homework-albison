import React from 'react'
import { Link } from 'react-router-dom';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import StudentData from './StudentData.json' 
 
function StudentCounsil() {

  const[data, data2] = StudentData;

  return (
    <div>
      <div className="pagecha">

        <div className="slidePart">
          <div className="slider">
              <div class="swiper-wrapper">
                <Swiper className='slide'
                  spaceBetween={50}
                  slidesPerView={1}
                  onSlideChange={() => console.log('slide change')}
                  onSwiper={(swiper) => console.log(swiper)}
                >
                  <SwiperSlide className='slide'>
                    <img src={ `assets/media/layoutImages/${data.img}`} alt="" />
                  </SwiperSlide>
                  <SwiperSlide className='slide'>
                    <img src={ `assets/media/layoutImages/${data.img2}`} alt="" />
                  </SwiperSlide>
                  <SwiperSlide className='slide'>
                    <img src={ `assets/media/layoutImages/${data.img3}`} alt="" />
                  </SwiperSlide>
                </Swiper>
              </div>
          </div>

          <h1>{data.title}</h1>
          <p>{data.text1}</p>
          <h4>Lorem ipsum, dolor sit amet </h4>
          <p>{data.text2}</p>
        </div>

        <div className="navbar">
          <ul className='sections'>
            <Link to="/Section1" ><li><span>|</span>{data.sec1}</li></Link>
            <Link to="/Section2" ><li><span>|</span>{data.sec2}</li></Link>
            <Link to="/Section3" ><li><span>|</span>{data.sec3}</li></Link>
            <Link to="/Section4" ><li><span>|</span>{data.sec4}</li></Link>
          </ul>
          
        </div>

      </div>

    </div>
  )
}
export default StudentCounsil