import React, { useState } from "react";
import styles from "./accordion.module.scss";

/*    
      component 3ta props oladi: "type" "title" "content";

      1) "type" 2xil qiymat bulishi mumkin: "forApply" yoki "forFAQ";
      "forApply" Apply sahifadagi accordion uchun, "forFAQ" F.A.Q sahifadagi accordion uchun.

      2) "title" accordionning title uchun, yani bosilganda ochilib yopiladigan jaydagi yuzuv.

      3) "content" accordionning content qismida chiqadigan joyi, tanasi. "content" qiymat sifatida JSX yoki komponent olishi kerak.
*/

export default function Accordion({ type, title, content }) {
   const [isOpen, setIsOpen] = useState(false);
   return (
      <div className={styles.main}>
         <div className={styles[`label-${type}`]}>
            <div
               className={
                  styles[`label-${type}_text`] +
                  (isOpen ? " " + styles[`label-${type}_text--open`] : "")
               }
               onClick={() => setIsOpen(!isOpen)}
            >
               <p>{title}</p>
            </div>
         </div>
         <div
            className={
               styles.content + (isOpen ? " " + styles["content--open"] : "")
            }
         >
            {content}
         </div>
      </div>
   );
}
