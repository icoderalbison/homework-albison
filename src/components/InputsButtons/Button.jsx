import React from 'react'
import styles from './main.module.scss'

function Button({text, borderRadius, padding, url, width, bg, uppercase, color}){ 
    let res = styles.btn;
    res = uppercase ? res + ` ${styles.uppercase}` : res;


    return(
        <button className={res} style={{maxWidth: width || 'auto' , borderRadius: borderRadius, padding: padding, background: bg, color: color}}>{text}</button>
    )
}

export default Button