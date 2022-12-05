import React from 'react'
import StudentData from '../StudentData.json';


function Section3() {
    const[data, data2, data3] = StudentData;

  return (
    <div> 
        <h1>{data3.sec3}</h1>
        <h1>Lorem ipsum dolor sit.</h1>
        <h1>{data3.sec1}</h1>
        <p>{data3.text2}</p>
        <p>{data3.text1}</p>

     </div>
  )
}

export default Section3