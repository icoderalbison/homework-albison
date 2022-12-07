import React from "react";
import Title from "../../components/title/Title";
import Stick from "../../components/title/Stick";
import { NavLink } from "react-router-dom";
import "./main.style.scss";

const links = [
  { path: "/", text: "Amity’s Welcome" },
  { path: "/q", text: "Founders" },
  { path: "/q", text: "Our Campus" },
  { path: "/q", text: "Alumni" },
  { path: "/q", text: "International Campus" },
  { path: "/q", text: "Policies" },
];

function MainLayout({ children, title }) {
  return (
    <div className="main-layout">
      <img
        className="main-layout__showcase"
        src="./assets/media/layout images/image (1).png"
        alt=""
      />
      <div className="main-layout__body">
        <div className="main-layout__body__title">
          <div className="main-layout__body__subtitle">
            Home :: PAGE :: <span>Current page</span>
          </div>
          <Title title={title} />
          <Stick color="#ffc600" />
        </div>
        <div className="main-layout__body__flex">
          <div className="main-layout__body__links">
            {links.map((link) => (
              <NavLink id="main-layout__link" to={link.path}>
                <div className="yellow-stick"></div>
                <p>{link.text}</p>
              </NavLink>
            ))}
          </div>
          <div className="main-layout__body__children">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
