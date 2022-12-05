import React from 'react'
import style from './main.module.scss'

const AmityInputs = ({label, type, placeholder, required, max, min, borderRadius, borderColor, bg, none}) => {
  let res = style.input
  res = borderRadius ? res + ` ${style.borderRadius}` : res;
  res = bg ? res + ` ${style.background}` : res;
  res = borderColor ? res + ` ${style.borderColor}` : res;

  let res2 = style.label;
  res2 = none ? style.none : res2

  return (
    <div className={style.wrap}>
      <label className={res2}>{label}</label>
      <input className={res} type={type || "text"} maxLength={max} minLength={min} placeholder={placeholder} required={required} />
    </div>
  )
}

export default AmityInputs