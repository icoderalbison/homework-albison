import React from 'react'
import Layout from '../../components/layouts/Layout'

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