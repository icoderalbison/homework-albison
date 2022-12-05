import React from "react";
import styles from "./ProgramCard.module.scss";

const ProgramCard = (ProgramProps) => {
  return (
    <div className={styles.pCards}>
      <img
        src={ProgramProps.image}
        alt="image"
        className={styles.pCards__img}
      />
      <div className={styles.pCards__info}>{ProgramProps.text}</div>
    </div>
  );
};

export default ProgramCard;
