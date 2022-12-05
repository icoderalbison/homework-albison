import React from "react";
import img1 from "./image/slide2-1.png";
import img2 from "./image/slide2-2.png";
import img3 from "./image/slide2-3.png";
import img4 from "./image/slide2-4.png";
import "./style.scss";

const Slide2 = () => {
  return (
    <div className="row">
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div className="slide2-row">
          <div>
            <img src={img1} />
          </div>
          <h2>
            Экономия <br /> до 70%
          </h2>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div className="slide2-row">
          <div>
            <img src={img2} />
          </div>
          <h2>
            Только подлинная
            <br /> продукция
          </h2>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div className="slide2-row">
          <div>
            <img src={img3} />
          </div>
          <h2>
            Оперативная <br /> доставка
          </h2>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div className="slide2-row">
          <div>
            <img src={img4} />
          </div>
          <h2>
            Огромный <br /> выбор товаров
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Slide2;
