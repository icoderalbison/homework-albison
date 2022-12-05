import React, { useEffect, useState } from 'react'
import '../title/style.scss'



export const CarouselItem = (props) => {
    if(props.url && props.img){
        return (
            <div className='carousel-item'><a href={props.url}>{props.img}</a></div>
        )
    } else if (props.img){
        return (
            <div className='carousel-item'><a href='/'>{props.img}</a></div>
        )
    } 
};




const Carousel = ({children}) => {

    const [activeIndex, setActiveIndex] = useState(0)

    const [paused, setPaused] = useState(false)

    const updateIndex = (newIndex) => {
        if(newIndex < 0){
            newIndex = React.Children.count(children) - 1/5
        } else if(newIndex *7 >= React.Children.count(children)){
            newIndex = 0
        }
        setActiveIndex(newIndex)
    }

    useEffect(()=>{
        const interval = setInterval(()=>{
            if (!paused){
                updateIndex(activeIndex + 1/4)
            }
        }, 1000)

        return () => {
            if (interval) {
                clearInterval(interval)
            }
        }
    })



  return (
    <div
        className='carousel'
        onMouseEnter={()=> setPaused(true)}
        onMouseLeave={()=> setPaused(false)}
    >
        <div className='inner' style={{transform: `translateX(-${activeIndex * 750}px)`}}>
            {React.Children.map(children, (child, index) => {
                return React.cloneElement(child, {width: '300px'})
            })}

        </div>

    </div>
  )
}

export default Carousel