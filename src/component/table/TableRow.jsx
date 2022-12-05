import React from "react";

/* 
    Jadvalni bitta qatorini chiqarib beradi;

    "props"ga kirib keladigan obyekt quyidagicha bo'lishi kerak;

    {
        img:            string => rasm joylashgan yo`l,
        title:          string => qator uchun sarlavha,
        expirationDate: string => tovarni yaroqlilik muddati,
        deliveryPrice:  number => dastavka narxi,
        totalPrice:     number => jami narx
    }
*/

export default function TableRow(props) {
   const {
      img,
      title,
      expirationDate,
      deliveryPrice,
      totalPrice,
      index,
      selectedState,
      toggleFunc,
   } = props;

   return (
      <div className="row__wapper">
         <div className="table__row">
            <div className="table__title">
               <img className="table__title-img" src={img} alt="" />
               <h3 className="table__title-text">{title}</h3>
            </div>
            <div className="table__data">
               <p className="table__data-label">Сроки:</p>
               <p className="table__data-text">{expirationDate} дней</p>
            </div>
            <div className="table__data">
               <p className="table__data-label">Стоимость доставки:</p>
               <span className="table__data-info">
                  <p className="table__data-text">от £{deliveryPrice}</p>
                  <img
                     src=".\assets\images\icons-page1\icon-5.info.svg"
                     alt=""
                  />
               </span>
            </div>
            <div className="table__data">
               <p className="table__data-label">Итого:</p>
               <p className="table__data-text">£{totalPrice}</p>
            </div>
            <div className="table__data">
               <img
                  onClick={() => {
                     toggleFunc(index);
                  }}
                  className={
                     "table__btn " +
                     (selectedState === index && "table__btn--rotated")
                  }
                  src=".\assets\images\icons-page1\icon-4.angle-down.svg"
                  alt=""
               />
            </div>
         </div>
         <div className={"drop " + (selectedState === index && "drop--show")}>
            <h3 className="drop__title">{title}</h3>
            <p className="drop__text">
               Lorem ipsum dolor, sit amet consectetur adipisicing elit.
               Expedita dolor alias nihil quis? Molestias, nulla ipsum!
               Repudiandae unde est rerum at voluptatibus inventore commodi,
               minima velit rem corporis ea optio? Lorem ipsum dolor sit amet
               consectetur, adipisicing elit. Quos perferendis nihil totam,
               voluptas, rem dicta quibusdam officia cupiditate numquam modi
               corrupti beatae magnam magni molestiae quis maiores autem porro
               eveniet.
            </p>
         </div>
      </div>
   );
}
