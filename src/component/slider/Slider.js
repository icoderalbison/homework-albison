import React, { Component } from "react";
import Slider from "react-slick";
import img1 from "./image/slide-1.png";
import img2 from "./image/slide-2.png";
import img3 from "./image/slide-3.png";
import img4 from "./image/slide-4.png";
import img5 from "./image/slide-5.png";
import img6 from "./image/slide-6.png";
import img7 from "./image/slide-1.png";
import img8 from "./image/slide-2.png";
import img9 from "./image/slide-3.png";
import "./style.scss";

export default class SwipeToSlide extends Component {
  render() {
    const settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        <Slider {...settings}>
          <div className="slide-box">
            <div>
              <img src={img1} alt="" />
            </div>
            <h1>Одежда</h1>
          </div>
          <div className="slide-box">
            <div>
              <img src={img2} alt="" />
            </div>
            <h1>Электроника</h1>
          </div>
          <div className="slide-box">
            <div>
              <img src={img3} alt="" />
            </div>
            <h1>Аксессуары</h1>
          </div>
          <div className="slide-box">
            <div>
              <img src={img4} alt="" />
            </div>
            <h1>Для детей</h1>
          </div>
          <div className="slide-box">
            <div>
              <img src={img5} alt="" />
            </div>
            <h1>Для спорта</h1>
          </div>
          <div className="slide-box">
            <div>
              <img src={img6} alt="" />
            </div>
            <h1>Косметика</h1>
          </div>
          <div className="slide-box">
            <div>
              <img src={img7} alt="" />
            </div>
            <h1>Одежда</h1>
          </div>
          <div className="slide-box">
            <div>
              <img src={img8} alt="" />
            </div>
            <h1>Электроника</h1>
          </div>
          <div className="slide-box">
            <div>
              <img src={img9} alt="" />
            </div>
            <h1>Аксессуары</h1>
          </div>
        </Slider>
      </div>
    );
  }
}
