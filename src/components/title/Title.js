import React from 'react'
import './style.scss'

function Title(props) {


  if(props.title){
    return <h1 id='title'>{props.title}</h1>
  } else if (props.titleUp){
    return <h1 id='titleUp'>{props.titleUp}</h1>
  } else if (props.titleDown){
    return <h1 id='titleDown'>{props.titleDown}</h1>
  } else if (props.titleUpLink){
    // return titleUpHref()
    const starter = props.titleUpLink.split(' ')
    return (
      <div id='titleUpLink'>
        <a href='/'><h1 id='titleUp'>{starter[0]}</h1></a>
        <h1 id='titleUp'>::</h1>
        <a href='/'><h1 id='titleUpSolid'>{starter[1]}</h1></a>
        <h1 id='titleUp'>::</h1>
        <a href='/'><h1 id='titleUpGray'>{starter[2]} {starter[3]}</h1></a>

      </div>
    )
  }
}

export default Title;
