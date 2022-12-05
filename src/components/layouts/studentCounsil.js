import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Clubs from './Clubs';
import Section1 from './Sections/Section1';
import Section2 from './Sections/Section2';
import Section3 from './Sections/Section3';
import Section4 from './Sections/Section4';
 
 function studentCounsil() {
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
                    <img src="assets/media/layoutImages/image1.png" alt="" />
                  </SwiperSlide>
                  <SwiperSlide className='slide'>
                    <img src="assets/media/layoutImages/image2.png" alt="" />
                  </SwiperSlide>
                  <SwiperSlide className='slide'>
                    <img src="assets/media/layoutImages/image5.png" alt="" />
                  </SwiperSlide>
                </Swiper>
              </div>
          </div>

          <h3>studentCounsil</h3>
          <p>
            Lorem loren10
            ipsum dolor sit amet consectetur adipisicing elit. Nisi enim aliquid quas quos fugit dignissimos iusto asperiores non esse quaerat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis perferendis nemo alias eum fugit. Culpa, voluptatibus reiciendis perspiciatis quod, nostrum sequi laudantium eius dicta enim recusandae quisquam vero, eos tenetur. Ea dolorem sapiente velit, doloremque ex repudiandae! Dolorem, commodi aspernatur.
          </p>
          <h4>Lorem ipsum, dolor sit amet </h4>
          <p>-Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          <p>-Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          <p>-Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          <p>-Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>

        <div className="navbar">
          <ul className='sections'>
            <Link to="/Sections/Section1.js" ><li><span>|</span> Section1</li></Link>
            <Link to="./Sections/Section2.js" ><li><span>|</span> Section2</li></Link>
            <Link to="./Sections/Section3.js" ><li><span>|</span> Section3</li></Link>
            <Link to="./Sections/Section4.js" ><li><span>|</span> Section4</li></Link>
          </ul>
        </div>
        <div className="sections">
          <Routes>
            <Route path="./Sections/Section1.js" element={<Clubs/> } />
            <Route  path='./Sections/Section1.js' element={<Section2/>}/>
            <Route  path='./Sections/Section1.js' element={<Section3/>}/>
            <Route  path='./Sections/Section1.js' element={<Section4/>}/>
          </Routes>
        </div>
      </div>


    </div>
  )
}
export default studentCounsil