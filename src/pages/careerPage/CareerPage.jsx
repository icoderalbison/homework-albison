import React from "react";
import CurrentPage from "../../components/CurrentPage/CurrentPage";
import Title from "../../components/title/Title";
import Strick from "../../components/title/Stick";
import Tabs from "../../components/tab/Tabs";
import data from "../../components/tab/tabsType2.json";
import "./careerStyle.scss";

function CareerPage() {
  return (
    <div className="carCent container">
      <CurrentPage />
      <Title title="Career Centre" />
      <div className="carStick">
        <Strick color="#FFC600" />
      </div>
      <Tabs {...data} />
    </div>
  );
}

export default CareerPage;
