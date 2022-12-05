import React from 'react'
import styles from './main.module.scss'

const Select = ({label, ...arg}) => {
  console.log(arg);
    let arr = Object.keys(arg)
  return (
    <div className={styles.wrap}>
      <label className={styles.label}>{label}</label>
      <select>{
        arr.map((elem) => (
          <option>{elem}</option>
        ))
        }</select>
    </div>
  )
}

export default Select