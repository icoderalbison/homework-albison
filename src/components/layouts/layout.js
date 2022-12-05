import React from 'react';
import Clubs from "./Clubs";
import './Layout.scss'
import './Student.scss'
import './Club.scss'
import './Academic.scss'
import StudentCounsil from "./studentCounsil";
import AcademicCalendar from "./AcademicCalendar";
import { Link, Route, Routes } from 'react-router-dom';

const layout = () => {
  return (
    <div>
      <header className='header'>

        <h1>Students Life</h1>

        <Link to="studentCounsil.js"><button to='/' className='StudentCounsil__btn'>StudentCounsil</button></Link>
        <Link to="Clubs.js"><button className='Clubs__btn'>Clubs</button></Link>
        <Link to="AcademicCalendar.js"><button className='AcademicCalendar__btn'>AcademicCalendar</button></Link>

      </header>

      <div className="layoutPart">
        <Routes>
          <Route path="StudentCounsil.js" element={<StudentCounsil/>} />
          <Route path="Clubs.js" element={<Clubs/>} />
          <Route path="AcademicCalendar.js" element={<AcademicCalendar/>} />
        </Routes>
      </div>

    </div>
  );
};

export default layout;