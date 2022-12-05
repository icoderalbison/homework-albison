import React, { useEffect, useState, useRef } from "react";
import Accordion from "../accardion/Accordion";

import styles from "./tabs.module.scss";
import cn from "classnames";
import cnBind from "classnames/bind";

const cx = cnBind(styles);

function Tabs(props) {
  const [state, setState] = useState(0);
  const tab1 = useRef();
  const tab2 = useRef();
  const tab3 = useRef();
  const tab4 = useRef();
  const content1 = useRef();
  const content2 = useRef();
  const content3 = useRef();
  const content4 = useRef();

  function click(param) {
    setState(param);
    content1.current.className =
      content2.current.className =
      content3.current.className =
      content4.current.className =
        styles.tabs__content;
    if (param == 1)
      content1.current.className = `${styles.active} ` + styles.tabs__content;
    if (param == 2)
      content2.current.className = `${styles.active} ` + styles.tabs__content;
    if (param == 3)
      content3.current.className = `${styles.active} ` + styles.tabs__content;
    if (param == 4)
      content4.current.className = `${styles.active} ` + styles.tabs__content;
  }

  return (
    <div className={styles.tabs}>
      <div className={styles.tabs__nav}>
        {props.button1 ? (
          <button
            className={styles.tabs__tab}
            ref={tab1}
            onClick={() => click(1)}
          >
            {props?.button1}
          </button>
        ) : (
          <span></span>
        )}
        {props.button2 ? (
          <button
            className={styles.tabs__tab}
            ref={tab2}
            onClick={() => click(2)}
          >
            {props?.button2}{" "}
          </button>
        ) : (
          <span></span>
        )}
        {props.button3 ? (
          <button
            className={styles.tabs__tab}
            ref={tab3}
            onClick={() => click(3)}
          >
            {props?.button3}
          </button>
        ) : (
          <span></span>
        )}
        {props.button4 ? (
          <button
            className={styles.tabs__tab}
            ref={tab4}
            onClick={() => click(4)}
          >
            {props?.button4}
          </button>
        ) : (
          <span></span>
        )}
      </div>
      <div
        ref={content1}
        className={`${styles.active} ` + styles.tabs__content}
      >
        {props.type1 ? (
          <div className={styles.type1}>
            <div className={styles.tabs__title1}>{props.bigTitle1}</div>
            <img className={styles.tabs__img} src={props.img1} alt="img" />
            <div className={styles.tabs__txt}>{props.txt1p1}</div>
            <div className={styles.tabs__txt}>{props.txt1p2}</div>
            <div className={styles.tabs__txt}>{props.txt1p3}</div>
            <div className={styles.tabs__title2}>{props.minTitle1}</div>
            <ul className={styles.tabs__list}>
              <li>{props.ul1Li1}</li>
              <li>{props.ul1Li2}</li>
              <li>{props.ul1Li3}</li>
              <li>{props.ul1Li4}</li>
            </ul>
          </div>
        ) : (
          <span></span>
        )}

        {props.type2 ? (
          <div>Table1</div>
        ) : (
          <span></span>
        )}
        <div className={styles.type2}></div>
      </div>
      <div ref={content2} className={styles.tabs__content}>
        {props.type1 ? (
          <div className={styles.type1}>
            <div className={styles.tabs__title1}>{props.bigTitle2}</div>
            <img className={styles.tabs__img} src={props.img2} alt="img" />
            <div className={styles.tabs__txt}>{props.txt2p1}</div>
            <div className={styles.tabs__txt}>{props.txt2p2}</div>
            <div className={styles.tabs__txt}>{props.txt2p3}</div>
            <div className={styles.tabs__title2}>{props.minTitle2}</div>
            <ul className={styles.tabs__list}>
              <li>{props.ul2Li1}</li>
              <li>{props.ul2Li2}</li>
              <li>{props.ul2Li3}</li>
              <li>{props.ul2Li4}</li>
            </ul>
          </div>
        ) : (
          <span></span>
        )}

        {props.type2 ? (
          <div>Table2</div>
        ) : (
          <span></span>
        )}
      </div>
      <div ref={content3} className={styles.tabs__content}>
      {props.type2 ? (
          <div>Table3</div>
        ) : (
          <span></span>
        )}
      </div>
      <div ref={content4} className={styles.tabs__content}>
      {props.type2 ? (
          <div>Table4</div>
        ) : (
          <span></span>
        )}
      </div>
      {console.log("ren")}
    </div>
  );
}

export default Tabs;
