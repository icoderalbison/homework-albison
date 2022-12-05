import React from 'react'
import AmityInputs from '../../components/InputsButtons/AmityInputs'

import style from './navbar.module.scss'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <input type="checkbox" id='check' />
      <div className="container">
      <div className={`${style.navbar}`}>
        <div className={style.logo}>
        <Link to='/'>
        <img src="./assets/logo/Logo.png" alt="" />
        </Link>
        </div>
        <nav >
          <ul>
            <li className=''>
              <Link>Programs</Link>
            </li>
            <li className=''>
              <Link to='/faq'>F.A.Q</Link>
            </li>
            <li className=''>
              <Link>Contact</Link>
            </li>
            <li className=''>
              <Link to='/apply'>Apply</Link>
            </li>
          </ul>
          <div className={style.links}>
            <a href="#"><img src="./assets/logo/ru.png" alt="" /></a>
            <a href="#">
              <img src="./assets/logo/eng.png" alt="" />
            </a>
            <a href="#">
              <img src="./assets/logo/uz.png" alt="" />

            </a>
          </div>
          <div>
            <label htmlFor="check">
              <svg className={style.burger} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M3 4h18v2H3V4zm0 7h12v2H3v-2zm0 7h18v2H3v-2z" fill="rgba(255,198,0,1)" /></svg>
              <svg className={style.close} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" fill="rgba(255,198,0,1)" /></svg>
            </label>
          </div>
        </nav>
      </div>
      </div>

      <div className={style.modal}>
        <div className="container">
          <div className={`${style.sidebar} `} >
            <div className={style.search}>
              <AmityInputs
               placeholder={'Search...'} type="text" borderRadius="100%" bg="white" none={'none'}/>
            </div>
            <div className={style.responsive_navbar}>
              <ul>
                <li className=''>
                  <Link>Programs</Link>
                </li>
                <li className=''>
                  <Link>F.A.Q</Link>
                </li>
                <li className=''>
                  <Link>Contact</Link>
                </li>
                <li className=''>
                  <Link>Apply</Link>
                </li>
              </ul>
            </div>
            <div className={style.navbar_wrapper}>
              <div>
                <h1 >About Us</h1>
                <ul>
                  <li>
                    <Link>
                      Amity’s Welcome <svg width="63" height="17" viewBox="0 0 63 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 8.5H54.364" stroke="white" stroke-width="2" stroke-linecap="round" stroke-dasharray="3 3" />
                        <path d="M54.3638 2.13599L60.7277 8.49995L54.3638 14.8639" stroke="white" stroke-width="2.5" stroke-linecap="round" />
                      </svg>

                    </Link>

                  </li>
                  <li>
                    <Link>
                      Founders <svg width="63" height="17" viewBox="0 0 63 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 8.5H54.364" stroke="white" stroke-width="2" stroke-linecap="round" stroke-dasharray="3 3" />
                        <path d="M54.3638 2.13599L60.7277 8.49995L54.3638 14.8639" stroke="white" stroke-width="2.5" stroke-linecap="round" />
                      </svg>

                    </Link>
                  </li>
                  <li>
                    <Link>
                      Our Campus <svg width="63" height="17" viewBox="0 0 63 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 8.5H54.364" stroke="white" stroke-width="2" stroke-linecap="round" stroke-dasharray="3 3" />
                        <path d="M54.3638 2.13599L60.7277 8.49995L54.3638 14.8639" stroke="white" stroke-width="2.5" stroke-linecap="round" />
                      </svg>

                    </Link>
                  </li>
                  <li>
                    <Link>
                      Alumni <svg width="63" height="17" viewBox="0 0 63 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 8.5H54.364" stroke="white" stroke-width="2" stroke-linecap="round" stroke-dasharray="3 3" />
                        <path d="M54.3638 2.13599L60.7277 8.49995L54.3638 14.8639" stroke="white" stroke-width="2.5" stroke-linecap="round" />
                      </svg>

                    </Link>
                  </li>
                  <li>
                    <Link>
                      International Campus <svg width="63" height="17" viewBox="0 0 63 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 8.5H54.364" stroke="white" stroke-width="2" stroke-linecap="round" stroke-dasharray="3 3" />
                        <path d="M54.3638 2.13599L60.7277 8.49995L54.3638 14.8639" stroke="white" stroke-width="2.5" stroke-linecap="round" />
                      </svg>

                    </Link>
                  </li>
                  <li>
                    <Link>
                      Policies <svg width="63" height="17" viewBox="0 0 63 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 8.5H54.364" stroke="white" stroke-width="2" stroke-linecap="round" stroke-dasharray="3 3" />
                        <path d="M54.3638 2.13599L60.7277 8.49995L54.3638 14.8639" stroke="white" stroke-width="2.5" stroke-linecap="round" />
                      </svg>

                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h1 >Admission</h1>
                <ul>
                  <li>
                    <Link>
                      Application Process <svg width="63" height="17" viewBox="0 0 63 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 8.5H54.364" stroke="white" stroke-width="2" stroke-linecap="round" stroke-dasharray="3 3" />
                        <path d="M54.3638 2.13599L60.7277 8.49995L54.3638 14.8639" stroke="white" stroke-width="2.5" stroke-linecap="round" />
                      </svg>

                    </Link>

                  </li>
                  <li>
                    <Link>
                      Scholarship <svg width="63" height="17" viewBox="0 0 63 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 8.5H54.364" stroke="white" stroke-width="2" stroke-linecap="round" stroke-dasharray="3 3" />
                        <path d="M54.3638 2.13599L60.7277 8.49995L54.3638 14.8639" stroke="white" stroke-width="2.5" stroke-linecap="round" />
                      </svg>

                    </Link>
                  </li>
                  <li>
                    <Link>
                      International Students <svg width="63" height="17" viewBox="0 0 63 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 8.5H54.364" stroke="white" stroke-width="2" stroke-linecap="round" stroke-dasharray="3 3" />
                        <path d="M54.3638 2.13599L60.7277 8.49995L54.3638 14.8639" stroke="white" stroke-width="2.5" stroke-linecap="round" />
                      </svg>

                    </Link>
                  </li>
                  <li>
                    <Link>
                      Alumni <svg width="63" height="17" viewBox="0 0 63 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 8.5H54.364" stroke="white" stroke-width="2" stroke-linecap="round" stroke-dasharray="3 3" />
                        <path d="M54.3638 2.13599L60.7277 8.49995L54.3638 14.8639" stroke="white" stroke-width="2.5" stroke-linecap="round" />
                      </svg>

                    </Link>
                  </li>
                  <li>
                    <Link>
                      Accommodation  <svg width="63" height="17" viewBox="0 0 63 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 8.5H54.364" stroke="white" stroke-width="2" stroke-linecap="round" stroke-dasharray="3 3" />
                        <path d="M54.3638 2.13599L60.7277 8.49995L54.3638 14.8639" stroke="white" stroke-width="2.5" stroke-linecap="round" />
                      </svg>

                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h1 >Information</h1>
                <ul>
                  <li>
                    <Link>
                      Transfer to Amity <svg width="63" height="17" viewBox="0 0 63 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 8.5H54.364" stroke="white" stroke-width="2" stroke-linecap="round" stroke-dasharray="3 3" />
                        <path d="M54.3638 2.13599L60.7277 8.49995L54.3638 14.8639" stroke="white" stroke-width="2.5" stroke-linecap="round" />
                      </svg>

                    </Link>

                  </li>
                  <li>
                    <Link>
                      Founders <svg width="63" height="17" viewBox="0 0 63 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 8.5H54.364" stroke="white" stroke-width="2" stroke-linecap="round" stroke-dasharray="3 3" />
                        <path d="M54.3638 2.13599L60.7277 8.49995L54.3638 14.8639" stroke="white" stroke-width="2.5" stroke-linecap="round" />
                      </svg>

                    </Link>
                  </li>
                  <li>
                    <Link>
                      News & Events  <svg width="63" height="17" viewBox="0 0 63 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 8.5H54.364" stroke="white" stroke-width="2" stroke-linecap="round" stroke-dasharray="3 3" />
                        <path d="M54.3638 2.13599L60.7277 8.49995L54.3638 14.8639" stroke="white" stroke-width="2.5" stroke-linecap="round" />
                      </svg>

                    </Link>
                  </li>
                  <li>
                    <Link>
                      Amity Global <svg width="63" height="17" viewBox="0 0 63 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 8.5H54.364" stroke="white" stroke-width="2" stroke-linecap="round" stroke-dasharray="3 3" />
                        <path d="M54.3638 2.13599L60.7277 8.49995L54.3638 14.8639" stroke="white" stroke-width="2.5" stroke-linecap="round" />
                      </svg>

                    </Link>
                  </li>
                  <li>
                    <Link>
                      Students Life <svg width="63" height="17" viewBox="0 0 63 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 8.5H54.364" stroke="white" stroke-width="2" stroke-linecap="round" stroke-dasharray="3 3" />
                        <path d="M54.3638 2.13599L60.7277 8.49995L54.3638 14.8639" stroke="white" stroke-width="2.5" stroke-linecap="round" />
                      </svg>

                    </Link>
                  </li>
                  <li>
                    <Link>
                      Career Centre  <svg width="63" height="17" viewBox="0 0 63 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 8.5H54.364" stroke="white" stroke-width="2" stroke-linecap="round" stroke-dasharray="3 3" />
                        <path d="M54.3638 2.13599L60.7277 8.49995L54.3638 14.8639" stroke="white" stroke-width="2.5" stroke-linecap="round" />
                      </svg>

                    </Link>
                  </li>
                  <li>
                    <Link>
                      Incubation Centre  <svg width="63" height="17" viewBox="0 0 63 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 8.5H54.364" stroke="white" stroke-width="2" stroke-linecap="round" stroke-dasharray="3 3" />
                        <path d="M54.3638 2.13599L60.7277 8.49995L54.3638 14.8639" stroke="white" stroke-width="2.5" stroke-linecap="round" />
                      </svg>

                    </Link>
                  </li>
                  <li>
                    <Link>
                      Students Abroad Program <svg width="63" height="17" viewBox="0 0 63 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 8.5H54.364" stroke="white" stroke-width="2" stroke-linecap="round" stroke-dasharray="3 3" />
                        <path d="M54.3638 2.13599L60.7277 8.49995L54.3638 14.8639" stroke="white" stroke-width="2.5" stroke-linecap="round" />
                      </svg>

                    </Link>
                  </li>
                  <li>
                    <Link>
                      Student Affairs  <svg width="63" height="17" viewBox="0 0 63 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 8.5H54.364" stroke="white" stroke-width="2" stroke-linecap="round" stroke-dasharray="3 3" />
                        <path d="M54.3638 2.13599L60.7277 8.49995L54.3638 14.8639" stroke="white" stroke-width="2.5" stroke-linecap="round" />
                      </svg>

                    </Link>
                  </li>
                  <li>
                    <Link>
                      Career with Amity  <svg width="63" height="17" viewBox="0 0 63 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 8.5H54.364" stroke="white" stroke-width="2" stroke-linecap="round" stroke-dasharray="3 3" />
                        <path d="M54.3638 2.13599L60.7277 8.49995L54.3638 14.8639" stroke="white" stroke-width="2.5" stroke-linecap="round" />
                      </svg>

                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Navbar