import React, { useState } from "react";
import TableRow from "./TableRow";
import "./table.scss";

const data = [
   {
      img: "./assets/images/icons-page1/icon-1.pochta.svg",
      title: "Почта России",
      expirationDate: "10-14",
      deliveryPrice: 27,
      totalPrice: 41.99,
   },
   {
      img: "./assets/images/icons-page1/icon-2.ems.svg",
      title: "EMS ПОЧТА РОССИЯ",
      expirationDate: "9-12",
      deliveryPrice: 40,
      totalPrice: 41.99,
   },
   {
      img: "./assets/images/icons-page1/icon-3.paketi.svg",
      title: "ПОЧТА РОССИИ МЕЛКИЕ ПАКЕТЫ",
      expirationDate: "10-14",
      deliveryPrice: 54,
      totalPrice: 90.5,
   },
];

/* 
    Jadval classi "table" bulgan divga uralgan.
    Jadvalini har bir qatori <TableRow/> componentidan keladi;
    <TableRow/> props uchun qiymatlarini yuqoridagi "data" uzgaruvchisidan oladi.

    Hozirgi holatda jadval tayyor qilingan faqat import qilib ishlatilsa buldi ;)
*/

export default function Table() {
   const [selected, setSelected] = useState(null);

   const toggle = (index) => {
      if (selected === index) return setSelected(null);
      return setSelected(index);
   };

   return (
      <div className="table">
         {data.map(
            (
               { img, title, expirationDate, deliveryPrice, totalPrice },
               index
            ) => (
               <TableRow
                  img={img}
                  title={title}
                  expirationDate={expirationDate}
                  deliveryPrice={deliveryPrice}
                  totalPrice={totalPrice}
                  key={index}
                  index={index}
                  selectedState={selected}
                  toggleFunc={toggle}
               />
            )
         )}
      </div>
   );
}
