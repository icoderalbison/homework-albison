import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container">
       <header >
      <input type="checkbox" id="check" />
      <div className="img">
        <Link to="/">
          <img src="./assets/logo/logo.png" alt="" />
        </Link>
      </div>
      <nav className="navbar">
        <label htmlFor="check" className="burger">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
          </svg>
        </label>
        <ul>
          <li>
            <Link to="/how-to-buy">Как покупать</Link>
          </li>
          <li>
            <Link to="/sales">Распродажи</Link>
          </li>
          <li>
            <Link to="/price">Цены</Link>
          </li>
          <li>
            <Link to="/faq">Помощь</Link>
          </li>
          <li>
            <Link to="/bonuses">Бонусы</Link>
          </li>
          <li>
            <Link to="/blog">Блог</Link>
          </li>
          <li>
            <Link to="/partner">Магазины</Link>
          </li>
        </ul>
        <button>Связаться с нами</button>
      </nav>
      <div className="signUp">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
        </svg>
        <p>Вход</p>
      </div>
      <button>Связаться с нами</button>
      <label for="check" className="burger">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M3 4h18v2H3V4zm6 7h12v2H9v-2zm-6 7h18v2H3v-2z" />
        </svg>
      </label>
    </header>
    </div>
   
  );
};

export default Navbar;
