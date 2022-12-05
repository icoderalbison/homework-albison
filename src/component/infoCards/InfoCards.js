import React from 'react'
import "./infoCards.scss"

function InfoCards(props) {
  return (
    <div className="infoCard">
        <img src={props.img} alt="img" className="infoCard__img" />
        <h1 className="infoCard__title">{props.title}</h1>
        <p className="infoCard__txt">{props.text}</p>
    </div>
  )
}
export default InfoCards;

