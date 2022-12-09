import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './Layout.scss'
import Clubs            from "../../components/layouts/Clubs";
import StudentCounsil   from "../../components/layouts/StudentCounsil";
import AcademicCalendar from "../../components/layouts/AcademicCalendar";
import HeaderData from "./headerdData.json"
import Section1 from '../../components/layouts/Sections/Section1';
import Section2 from '../../components/layouts/Sections/Section2';
import Section3 from '../../components/layouts/Sections/Section3';
import Section4 from '../../components/layouts/Sections/Section4';
import Buttons from './buttonsData.json'
import Title from '../../components/title/Title';
import Stick from "../../components/title/Stick"

const StudentPage = (props) => {

  const[btn1, btn2, btn3] = Buttons;
  const[header_title] = HeaderData;
  console.log(header_title.title);

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
          <div className="StudentTitle"><Title title={header_title.title}/></div>
          <div className="line"> <Stick color={header_title.line} /></div>

            <Link to="/StudentCounsil">
              <button className='StudentCounsil__btn' onClick={(e)=> imageChange1(e)}>{btn1.buttonName}</button>
            </Link>
            <Link to="/Clubs">
              <button className='Clubs__btn' onClick={(e)=> imageChange2(e)}>{btn2.buttonName}</button>
            </Link>
            <Link to="/AcademicCalendar">
              <button className='AcademicCalendar__btn' onClick={(e)=> imageChange3(e)}>{btn3.buttonName}</button>
            </Link>

        </header>

        <div className="layoutPart">
            <Routes>
              <Route path="/StudentCounsil" element={<StudentCounsil/>} />
              <Route path="/Clubs" element={<Clubs/>} />
              <Route path="/AcademicCalendar" element={<AcademicCalendar/>} />
              
              <Route  path='/Section1' element={<Section1/>}/>
              <Route  path='/Section2' element={<Section2/>}/>
              <Route  path='/Section3' element={<Section3/>}/>
              <Route  path='/Section4' element={<Section4/>}/>
            </Routes>
        </div>
    </div>
  );
};

export default StudentPage;