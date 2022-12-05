import React from 'react'
import StudentData from '../StudentData.json';


function Section4() {
  const[data, data2, data3, data4] = StudentData;

  return (
    <div>
        <h1>{data.sec4}</h1>
        <h1>Lorem ipsum dolor sit.</h1>
        <p>{data.text1}</p>
        <p>{data.text2}</p>

    </div>
  )
}

export default Section4