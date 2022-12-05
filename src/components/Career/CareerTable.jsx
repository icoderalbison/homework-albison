import React from "react";
import CurrentPage from "../CurrentPage/CurrentPage";

import Stick from "../title/Stick";
import Title from "../title/Title";

import "./CareerTable.scss";
import CareerRow from "./Table/Table";

const CareerTable = () => {
  return (
    <div className="main-wrap">
      <div className="heading-wrap">
        <CurrentPage />
        <Title title="Career with Amity " />
        <Stick color="#FFC600" />
      </div>
      <div className="table">
        <CareerRow />
      </div>
    </div>
  );
};

export default CareerTable;
