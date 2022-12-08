import React from 'react'
import StudentData from '../StudentData.json';



function Section1() {
  const[data, data2] = StudentData;


  return (
    <div>
        <h1>{data.sec1}</h1>
        <p>{data.text2}</p>
        <p>{data.text1}</p>
    </div>
  )
}

export default Section1