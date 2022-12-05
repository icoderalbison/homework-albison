import React from 'react'
import style from './footer.module.scss'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className="container">
        <div className={style.foteer_wrapper}>
          <div className={style.footer_top}>
            <div className={style.footer_logo}>
              <img src="./assets/logo/Logo.png" alt="" />
              <div className={style.footer_logo_child}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M12 20.9l4.95-4.95a7 7 0 1 0-9.9 0L12 20.9zm0 2.828l-6.364-6.364a9 9 0 1 1 12.728 0L12 23.728zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" fill="#ffffff" /></svg>
                <a href="">P.O. Box 345019
                  Dubai International Academic City</a>
              </div>
              <div className={style.footer_logo_child}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm17 4.238l-7.928 7.1L4 7.216V19h16V7.238zM4.511 5l7.55 6.662L19.502 5H4.511z" fill="rgba(255,255,255,1)" /></svg>
                <a href=''>info@amityuniversity.com</a>
              </div>
              <div className={style.footer_logo_child}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M9.366 10.682a10.556 10.556 0 0 0 3.952 3.952l.884-1.238a1 1 0 0 1 1.294-.296 11.422 11.422 0 0 0 4.583 1.364 1 1 0 0 1 .921.997v4.462a1 1 0 0 1-.898.995c-.53.055-1.064.082-1.602.082C9.94 21 3 14.06 3 5.5c0-.538.027-1.072.082-1.602A1 1 0 0 1 4.077 3h4.462a1 1 0 0 1 .997.921A11.422 11.422 0 0 0 10.9 8.504a1 1 0 0 1-.296 1.294l-1.238.884zm-2.522-.657l1.9-1.357A13.41 13.41 0 0 1 7.647 5H5.01c-.006.166-.009.333-.009.5C5 12.956 11.044 19 18.5 19c.167 0 .334-.003.5-.01v-2.637a13.41 13.41 0 0 1-3.668-1.097l-1.357 1.9a12.442 12.442 0 0 1-1.588-.75l-.058-.033a12.556 12.556 0 0 1-4.702-4.702l-.033-.058a12.442 12.442 0 0 1-.75-1.588z" fill="rgba(255,255,255,1)" /></svg>
                <a href=''>+1 (123) 456 7890</a>
              </div>
            </div>
            <div className={style.footer_link}>
              <h1>About Us</h1>
              <ul>
                  <li>
                    <Link>
                    Amity’s Welcome
                    </Link>
                  </li>
                  <li>
                    <Link>
                    Founders
                    </Link>
                  </li>
                  <li>
                    <Link>
                    Our Campus
                    </Link>
                  </li>
                  <li>
                    <Link>
                    Alumni
                    </Link>
                  </li>
                  <li>
                    <Link>
                    International Campus
                    </Link>
                  </li>
                  <li>
                    <Link>
                    Policies
                    </Link>
                  </li>
                </ul>
            </div>
            <div className={style.footer_link}>
              <h1>Admission</h1>
              <ul>
                  <li>
                    <Link>
                    Application Process
                    </Link>
                  </li>
                  <li>
                    <Link>
                    Scholarship
                    </Link>
                  </li>
                  <li>
                    <Link>
                    International Students
                    </Link>
                  </li>
                  <li>
                    <Link>
                    Accommodation 
                    </Link>
                  </li>
                  
                </ul>
            </div>
            <div className={style.footer_link}>
              <h1>Information</h1>
              <ul>
                  <li>
                    <Link>
                    Transfer to Amity
                    </Link>
                  </li>
                  <li>
                    <Link>
                    News & Events 
                    </Link>
                  </li>
                  <li>
                    <Link>
                    Amity Global
                    </Link>
                  </li>
                  <li>
                    <Link>
                    Students Life
                    </Link>
                  </li>
                  <li>
                    <Link>
                    Career Centre 
                    </Link>
                  </li>
                  <li>
                    <Link>
                    Incubation Centre
                    </Link>
                  </li>
                  <li>
                    <Link>
                    Students Abroad Program
                    </Link>
                  </li>
                  <li>
                    <Link>
                    Student Affairs
                    </Link>
                  </li>
                  <li>
                    <Link>
                    Career with Amity
                    </Link>
                  </li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer