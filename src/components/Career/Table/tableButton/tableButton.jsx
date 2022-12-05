import React from "react";
import "./tableButton.scss"

const TableButton = (typeOfSubmit = "submit", link = "", title = "VIEW") => {
  return (
    <button className="tbtn" type={typeOfSubmit} href={link}>
      
      {title}
    </button>
  );
};

export default TableButton;
