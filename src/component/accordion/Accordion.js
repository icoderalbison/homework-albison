import React, { useEffect, useState, useRef } from "react";
import { AccordionData } from "./AccordionData";
import accor from "./accorStyle.scss";

function Accordion(props) {
  const [state, setState] = useState(0);
  const answer = useRef();
  console.log(answer);
  function plus(target) {
    setState(1);

    target.style.transform = "rotate(0)";
    answer.current.style.display = "block";
    setTimeout(() => {
      answer.current.style.transform = "translate(0, 0)";
    }, 0);
  }
  function minus(target) {
    setState(0);

    target.style.transform = "rotate(180deg)";
    answer.current.style.transform = "translate(0, -20px)";

    setTimeout(() => {
      answer.current.style.display = "none";
    }, 200);
  }
  function click({ target }) {
    state ? minus(target) : plus(target);
  }

  return (
    <>
      <div className="accor">
        <div className="container">
          <h1 className={accor}>{props.title}</h1>
          <div className="accor__card">
            <div className="accor__quest">{props.question}</div>
            <button onClick={click} className="accor__arrow">
              ^
            </button>
            <div className="accor__ansDiv">
              <div className="accor__ans" ref={answer}>
                {props.answer}
              </div>
            </div>
          </div>
          {console.log("render")}
        </div>
      </div>
    </>
  );
}

function AccorDatas() {
  return (
    <div className="accordions">
      {AccordionData.map((accItem, index) => (
        <Accordion {...accItem} />
      ))}
    </div>
  );
}

export default AccorDatas;
