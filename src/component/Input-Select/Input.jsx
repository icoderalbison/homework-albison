import React from 'react'
import './style.scss'

const Input = ({type, placeholder, title, img}) => {
  return (
    <div className="input-wrap">
      <h3 className='h3'>{title}</h3>
      <div className="inputs">
        <img src={img} />
        <input type={type} placeholder={placeholder} className='input'/>
      </div>
    </div>
  )
}

export default Input