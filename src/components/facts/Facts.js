import "./facts.scss";
import Stick from "../title/Stick";

/*

    Facts 5 ta props oladi: theme, background, header, subheader va stickColor
        1. theme uchun ikki variant bor "dark" yoki "orange"

        2. background ishlatilgan js faylda background rasmlar import qilingan bo'lishi kerak
        e.g: import rasm from "assets/rasmlar/rasm.png";
            <Facts background={rasm} />

        3. header ga headerdagi text kiritiladi

        4. subheader ga subheaderdagi text kiritiladi

        5. stickColor ga pastki qismdagi stickning rangi kiritiladi

    Fact faqat grid yoki flexning ichida ishlatilganligi uchun widthni 100% qildim. 
    
*/

function Facts(props) {
  if (props.theme === "dark") {
    return (
      <div
        className="facts-root-dark facts-root"
        style={{ backgroundImage: `url(${props.background})` }}
      >
        <div className="facts-text-dark facts-text">
          <h1>{props.header}</h1>
          <h2>{props.subheader}</h2>
          <Stick color={props.stickColor} />
        </div>
        <div className="facts-background"></div>
      </div>
    );
  } else if (props.theme === "orange") {
    return (
      <div
        className="facts-root-orange facts-root"
        style={{ backgroundImage: `url(${props.background})` }}
      >
        <div className="facts-text-orange facts-text">
          <h1>{props.header}</h1>
          <h2>{props.subheader}</h2>
          <Stick color={props.stickColor} />
        </div>
      </div>
    );
  }
}

export default Facts;
