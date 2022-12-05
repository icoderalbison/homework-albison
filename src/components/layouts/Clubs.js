import React from 'react'
import { Link } from 'react-router-dom';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

function Clubs() {
  return (
    <div>
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
                        <img src="assets/media/layoutImages/image4.jpg" alt="" />
                      </SwiperSlide>
                      <SwiperSlide className='slide'>
                        <img src="assets/media/layoutImages/image5.png" alt="" />
                      </SwiperSlide>
                      <SwiperSlide className='slide'>
                        <img src="assets/media/layoutImages/image3.png" alt="" />
                      </SwiperSlide>
                    </Swiper>
                    
                </div>

                </div>
            </div>
            <h3>Clubs</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi enim aliquid quas quos fugit dignissimos iusto asperiores non esse quaerat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis perferendis nemo alias eum fugit. Culpa, voluptatibus reiciendis perspiciatis quod, nostrum sequi laudantium eius dicta enim recusandae quisquam vero, eos tenetur. Ea dolorem sapiente velit, doloremque ex repudiandae! Dolorem, commodi aspernatur.
            </p>
            <p>
              ....Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi enim aliquid quas quos fugit dignissimos iusto asperiores non esse quaerat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis perferendis nemo alias eum fugit. Culpa, voluptatibus reiciendis perspiciatis quod,
            </p>
          </div>

          <div className="navbar">

            <ul className='sections'>
              <Link to="Section1" ><li><span>|</span> Section1</li></Link>
              <Link to="Section2" ><li><span>|</span> Section2</li></Link>
              <Link to="Section3" ><li><span>|</span> Section3</li></Link>
              <Link to="Section4" ><li><span>|</span> Section4</li></Link>
            </ul>

          </div>
        </div>
    </div>
  )
}
export default Clubs
