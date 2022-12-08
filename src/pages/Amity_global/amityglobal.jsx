import React from 'react'
import data from "./global.json"
import "./amityglobal.scss"
import Cardglobalcomp from './cardglobalcomp'
import Stick from '../../components/title/Stick'
import { Link } from 'react-router-dom'


const amityglobal = () => {
  return (
    <div className='amityGlobal'>
        <div className='heading'>
            <div className="heading__link">
                
                 
                

            </div>
            <div className="heading__text">
                <h2>
                   Amity Global
                </h2>
                <Stick color="yellow"/>
            </div>
        </div>
        <div className='amityGlobal__cards'>
            {
                data.map((item)=>{
                   return    <Cardglobalcomp imgurl={item.imgUrl} title={item.title} text={item.text}/>

                })
            }

        </div>
      
    </div>
  )
}

export default amityglobal
