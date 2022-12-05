import React from 'react'
import StudentData from '../StudentData.json';

function Section2() {
    const[data, data2] = StudentData;
  return (
    <div>
        
        <h1>{data2.sec2}</h1>
        <p>{data2.text1}</p>
        <p>{data2.text2}</p>
    </div>
  )
}

export default Section2