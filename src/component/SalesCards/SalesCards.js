import React from "react";
import "./SalesCards.scss";

const SalesCards = (SalesCard) => {
  return (
    <div className="salesCards__card	">
      <div className="salesCards__img">
        <img src={SalesCard.img} alt="image" />
      </div>
      <div className="salesCards__info">
        <h1 className="salesCards__title">{SalesCard.title}</h1>
        <p className="salesCards__text">
          <span className="salesCards__txtColor">{SalesCard.txtColor} </span>
          <span className="salesCards__txt">{SalesCard.span}</span>
          <b className="salesCards__sum"> {SalesCard.sum}</b>
          <span className="salesCards__txtColor">{SalesCard.txtColor} </span>
          <span className="salesCards__txt">{SalesCard.span}</span>
          <b className="salesCards__sum"> {SalesCard.sum}</b>
          <span className="salesCards__txtColor">{SalesCard.txtColor} </span>
          <span className="salesCards__txt">{SalesCard.span}</span>
          <b className="salesCards__sum"> {SalesCard.sum}</b>
          {SalesCard.desc}
        </p>
        <button type="submit" className="salesCards__button">
          {SalesCard.button}
        </button>
      </div>
    </div>
  );
};

export default SalesCards;
