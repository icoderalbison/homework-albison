import React from 'react';
// import ReactDOM from "react-dom/client";
import StudentCounsil from "./studentCounsil";
import Clubs from "./Clubs";
import AcademicCalendar from "./AcademicCalendar";

const layout = () => {
  return (
    <div>
      <h1>Students Life</h1>

      <form>
        <button className='StudentCounsil__btn'>StudentCounsil</button>
        <button className='Clubs__btn'>Clubs</button>
        <button className='AcademicCalendar__btn'>AcademicCalendar</button>
      </form>


      <Routes>
        <Route path="studentCounsil.js" element={<studentCounsil/>} />
        <Route path="Clubs.js" element={<Clubs/>} />
        <Route path="AcademicCalendar.js" element={<AcademicCalendar/>} />
      </Routes>

    </div>
  );
};

export default layout;