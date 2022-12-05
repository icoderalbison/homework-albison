import React from 'react'
import style from './main.module.scss'

const Textarea = ({placeholder, required, max, min, borderRadius}) => {
    let res = style.textarea
    res = borderRadius ? res + ` ${style.borderRadius}` : res;
  
    return (
        <textarea className={res} maxLength={max} minLength={min} placeholder={placeholder} required={required} />
    )
  }

export default Textarea