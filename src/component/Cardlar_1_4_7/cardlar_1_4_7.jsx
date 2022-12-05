import React from "react";
import "./cardlar_1_4_7.scss";

const cardlar_1_4_7 = function (props) {
  // glavni div 2 xil class oladi cardDiv va cardDiv2
  // qaysi pageda iwlatilishi ga qarab class caqirin
  // cardDiv ==> 1 va 4 pagedagi carldar un  cardDiv2 ==> 7 page dagi un
  // o'lchamni ozgartirish un  cardDiv va cardDiv2 asosiy classlarga width berish kk
  // widthini pageni sass fayli icida o'lcham bering componentni ozini widthni ozgartirmang!
  // Namuna::  --->> pastda
  //    <Cardlar_1_4_7 boshclass="cardDiv or cardDiv2" btn="none  or  btn"  imgUrl={data.imgyol} title={data.title} text={data.text}/>
  return (
    <div className={props.boshclass}>
      <div className={`${props.boshclass}__img`}>
        <img src={props.imgUrl} alt="" />
        {/* imgUrl propga img yoli beriladi */}
      </div>
      <div className={`${props.boshclass}__title`}>
        <h4>{props.title}</h4>
        {/* title propi */}
      </div>
      <div className={`${props.boshclass}__text`}>
        <p>{props.text}</p>
        {/* text propi  */}
      </div>
      <div className={`${props.boshclass}__date`}>
        {/* bu data static faqat 7 page dagi card un tegilmasin */}
        <div>22.10.2021</div>
        <div>Читать: 8 минут</div>
      </div>
      <div className={`${props.boshclass}__${props.btn}`}>
        {/* button lar 2 xil class oladi none va btn agar button kk bolsa 
                 propga quyidagica berilsin ==> btn="btn" aks hold btn="none"
                */}
        <button>Бесплатно</button>
      </div>
    </div>
  );
};

export default cardlar_1_4_7;
