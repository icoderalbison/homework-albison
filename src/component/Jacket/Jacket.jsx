import React from "react";
import "./Jacket.scss";

const Jacket = () => {
  return (
    <div className="wrapOfJacket">
      <div className="rus childd">
        <h1>Columbia Barlow Pass 550 Turbodown Jacket</h1>
        <div className="row">
          <img src="assets/images/page1/page1-russia.png" alt="" />
          <div className="row__right">
            <span>Цена в России</span>
            <p>7891,46₽</p>
          </div>
        </div>
        <div className="row2">
          <div className="img-div">
            <img src="assets/images//page1/page1_wear1.png" />
          </div>
          <img
            src="assets/images//page1/left.png"
            className="right-ic ARROW"
            alt=""
          />
        </div>
      </div>
      <div className="jacket">
        <img src="assets/images/page1/page1_wear2.png" alt="" />
        <span className="jacket-span">Срок доставки примерно 10 дней</span>
        <p className="jacket-p">
          Вы экономите до <b>$119.56</b>
        </p>
      </div>
      <div className="uk childd">
        <h1>
          Доставка одежды из Великобритании от
          <b> £7.79</b>
        </h1>
        <div className="row">
          <img src="assets/images/page1/page1-uk.png" alt="" />
          <div className="row__right">
            <span>Цена в UK</span>
            <p>£80.62</p>
          </div>
        </div>
        <div className="row2">
          <img
            src="assets/images//page1/right.png"
            className="right-ic ARROW"
            alt=""
          />
          <div className="img-div">
            <img src="assets/images//page1/page1_wear3.png" />
            <div className="circle"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Jacket;
