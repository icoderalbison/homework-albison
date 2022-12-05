import React, { useState } from 'react';
import Clubs from "./Clubs";
import './Layout.scss'
import './Student.scss'
import './Club.scss'
import './Academic.scss'
import StudentCounsil from "./studentCounsil";
import AcademicCalendar from "./AcademicCalendar";
import { Link, Route, Routes } from 'react-router-dom';
import Section1 from './Sections/Section1';
import Section2 from './Sections/Section2';
import Section3 from './Sections/Section3';
import Section4 from './Sections/Section4';
import Buttons from './buttonsData.json'

const layout = (props) => {

  const[btn1, btn2, btn3] = Buttons;

  // const [image, setImage] = useState("headerImage")

  const imageChange1 = () => {
  //   setImage("headerImage")
  }
  const imageChange2 = () => {
  //   setImage("headerImage2")
  }

  return (
    <div>
      <header className={`header headerImage`}>


        <h1>Students Life</h1>

          <Link to="studentCounsil.js">
            <button className='StudentCounsil__btn' onClick={imageChange1}>{btn1.buttonName}</button>
          </Link>
          <Link to="Clubs.js">
            <button className='Clubs__btn' onClick={imageChange2}>{btn2.buttonName}</button>
          </Link>
          <Link to="AcademicCalendar.js">
            <button className='AcademicCalendar__btn' onClick={imageChange1}>{btn3.buttonName}</button>
          </Link>

      </header>

      <div className="layoutPart">
          <Routes>
            <Route path="StudentCounsil.js" element={<StudentCounsil/>} />
            <Route path="Clubs.js" element={<Clubs/>} />
            <Route path="AcademicCalendar.js" element={<AcademicCalendar/>} />
            <Route  path='/Section1' element={<Section1/>} />
            <Route  path='/Section2' element={<Section2/>}/>
            <Route  path='/Section3' element={<Section3/>}/>
            <Route  path='/Section4' element={<Section4/>}/>
          </Routes>
      </div>

    </div>
  );
};

export default layout;