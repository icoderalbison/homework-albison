import React from "react";
import Title from "../../components/title/Title";
import Stick from "../../components/title/Stick";
import data from "./faqData.json";

import s from "./faq.module.scss";
import Accordion from "../../components/accardion/Accordion";

function Faq() {
  return (
    <>
      <div className={`container ${s.faqDiv}`}>
        <div className={s.faq}>
          <div className={s.faq__pageDir}>
            Home :: PAGE :: <span> Current page </span>
          </div>
          <div className={s.faq__tit}>
            <Title title="Frequently Asked Questions" />
          </div>
          <Stick color="#FFC600" />
        </div>
        {data.map((elm, ind) => (
          <Accordion {...elm} />
        ))}
      </div>
    </>
  );
}

export default Faq;
