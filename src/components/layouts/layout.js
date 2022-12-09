import React, { useState } from 'react';
import Clubs from "./Clubs";
import './Layout.scss'
import StudentCounsil from "./StudentCounsil";
import AcademicCalendar from "./AcademicCalendar";
import { Link, Route, Routes } from 'react-router-dom';
import HeaderData from "./headerdData.json"
import Section1 from './Sections/Section1';
import Section2 from './Sections/Section2';
import Section3 from './Sections/Section3';
import Section4 from './Sections/Section4';
import Buttons from './buttonsData.json'
import Title from '../title/Title';
import Stick from "../title/Stick"

const Layout = (props) => {

  const[btn1, btn2, btn3] = Buttons;
  const[header_title] = HeaderData;

  const [image, setImage] = useState("headerImage")

  const imageChange1 = () => {
    setImage("headerImage")
  }
  const imageChange2 = () => {
    setImage("headerImage2")
  }
  const imageChange3 = () => {
    setImage("headerImage3")
  }

  return (
    <div>
        <header className={`headerLayout ${image}`}>

          <div className="link"><Title titleUpLink={header_title.link}/></div>
          <Title title={header_title.title}/>
          <div className="line"> <Stick color={header_title.line} /></div>


          <h1></h1>

            <Link to="./studentCounsil">
              <button className='StudentCounsil__btn' onClick={(e)=> imageChange1(e)}>{btn1.buttonName}</button>
            </Link>
            <Link to="./Clubs.js">
              <button className='Clubs__btn' onClick={(e)=> imageChange2(e)}>{btn2.buttonName}</button>
            </Link>
            <Link to="./AcademicCalendar.js">
              <button className='AcademicCalendar__btn' onClick={(e)=> imageChange3(e)}>{btn3.buttonName}</button>
            </Link>

        </header>

        <div className="layoutPart">
          <h1>layoutPart</h1>
          {/* <StudentCounsil /> */}
            <Routes>
              <Route path="./studentCounsil" element={<StudentCounsil/>} />
              <Route path="./Clubs" element={<Clubs/>} />
              <Route path="./AcademicCalendar" element={<AcademicCalendar/>} />
              
              <Route  path='/Section1' element={<Section1/>} />
              <Route  path='/Section2' element={<Section2/>}/>
              <Route  path='/Section3' element={<Section3/>}/>
              <Route  path='/Section4' element={<Section4/>}/>
            </Routes>
        </div>
    </div>
  );
};

export default Layout;