import React from "react";
import "./Buttonn.scss";

const Button = ({ value = "Button", width = "100%" }) => {
  return (
    <div className="wrap">
      <button className="myBtn" style={{ width: width }}>
        {value}
      </button>
    </div>
  );
};

export default Button;
