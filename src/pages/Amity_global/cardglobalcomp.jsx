import React from 'react'
import "./cardglobalcomp.scss"
const cardglobalcomp = (props) => {
    return (
        <div className='cardGlobal'>
            <div className='cardGlobal__img'>
                <img src={props.imgurl} alt="" />
            </div>
            <div className='texts'>
                <div className='texts__title '>
                    <h4>{props.title}</h4>
                </div>
                <div className='texts__text '>
                    <p>{props.text}</p>
                </div>

            </div>






        </div>
    )
}

export default cardglobalcomp
