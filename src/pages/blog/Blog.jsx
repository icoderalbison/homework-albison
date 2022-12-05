import React from "react";
import Cards from "../../component/cards/Cards";
import Card from "../../component/Cardlar_1_4_7/cardlar_1_4_7";
import "./blog.style.scss";

let cards = [
  {
    boshclass: "cardDiv2",
    imgUrl: "./assets/images/page7/card_img1.png",
    btn: "none",
    title: "Интернет-магазин Urban Outfitters в UK: обзор",
  },
  {
    boshclass: "cardDiv2",
    imgUrl: "./assets/images/page7/card_img2.png",
    btn: "none",
    title: "Интернет-магазин Urban Outfitters в UK: обзор",
  },
  {
    boshclass: "cardDiv2",
    imgUrl: "./assets/images/page7/card_img3.png",
    btn: "none",
    title: "Интернет-магазин Urban Outfitters в UK: обзор",
  },
  {
    boshclass: "cardDiv2",
    imgUrl: "./assets/images/page7/card_img4.png",
    btn: "none",
    title: "Интернет-магазин Urban Outfitters в UK: обзор",
  },
  {
    boshclass: "cardDiv2",
    imgUrl: "./assets/images/page7/card_img5.png",
    btn: "none",
    title: "Интернет-магазин Urban Outfitters в UK: обзор",
  },
  {
    boshclass: "cardDiv2",
    imgUrl: "./assets/images/page7/card_img6.png",
    btn: "none",
    title: "Интернет-магазин Urban Outfitters в UK: обзор",
  },
  {
    boshclass: "cardDiv2",
    imgUrl: "./assets/images/page7/card_img7.png",
    btn: "none",
    title: "Интернет-магазин Urban Outfitters в UK: обзор",
  },
  {
    boshclass: "cardDiv2",
    imgUrl: "./assets/images/page7/card_img8.png",
    btn: "none",
    title: "Интернет-магазин Urban Outfitters в UK: обзор",
  },
  {
    boshclass: "cardDiv2",
    imgUrl: "./assets/images/page7/card_img9.png",
    btn: "none",
    title: "Интернет-магазин Urban Outfitters в UK: обзор",
  },
  {
    boshclass: "cardDiv2",
    imgUrl: "./assets/images/page7/card_img10.png",
    btn: "none",
    title: "Интернет-магазин Urban Outfitters в UK: обзор",
  },
  {
    boshclass: "cardDiv2",
    imgUrl: "./assets/images/page7/card_img11.png",
    btn: "none",
    title: "Интернет-магазин Urban Outfitters в UK: обзор",
  },
  {
    boshclass: "cardDiv2",
    imgUrl: "./assets/images/page7/card_img12.png",
    btn: "none",
    title: "Интернет-магазин Urban Outfitters в UK: обзор",
  },
];

function Blog() {
  return (
    <>
      <div className="blog__showcase">
        <Cards locationPage="Главная  /  Блог" BigTitle="Блог" />
      </div>
      <div className="blog__cards container">
        {cards.map((card) => (
          <Card {...card} />
        ))}
      </div>
      <div className="blog__bottom">
        <Cards
          BigTitle={"Остались вопросы? Спросите нас в соцсетях!"}
          links1={"assets/images/icons-page1/Ватсап.png"}
          links2={"assets/images/icons-page1/Вайбер.png"}
          links3={"assets/images/icons-page1/Чат.png"}
        />
      </div>
    </>
  );
}

export default Blog;
