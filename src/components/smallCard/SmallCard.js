import React from "react";
import "./smallCard.scss";
import Stick from "../title/Stick";

/*

    SmallCard ikkita props oladi: background va text

        1. background ishlatilgan js faylda background rasmlar import qilingan bo'lishi kerak
        e.g: import rasm from "assets/rasmlar/rasm.png";
            <SmallCard background={rasm} />

        2. text ga carddagi text kiritiladi
    
    SmallCard faqat grid yoki flexning ichida ishlatilganligi uchun widthni 100% qildim. 

*/

function SmallCard(props) {
  return (
    <div id="small-card" style={{}}>
      <div
        id="small-card-background"
        style={{ backgroundImage: `url(${props.background})` }}
      >
        <div id="small-card-top">
          <p id="small-card-top-p1">24</p>
          <p id="small-card-top-p2">Feb</p>
          <p id="small-card-top-p3">2022</p>
        </div>
        <div id="small-card-bottom">
          <p>CATEGORY</p>
        </div>
      </div>
      <div id="small-card-text">
        <h2>{props.text}</h2>
        <Stick color="#FFC600" />
      </div>
    </div>
  );
}

export default SmallCard;
