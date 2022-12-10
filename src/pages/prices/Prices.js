import "./price.style.scss";
import React from "react";
import Cardlar_1_4_7 from "../../component/Cardlar_1_4_7/cardlar_1_4_7";
import Cards from "../../component/cards/Cards";
import InputsWrap from "../../component/Input-Select/InputsWrap";
import Title from "../../component/TITLE/Title";
import Description from "../../component/TITLE/Description";
import Table from "../../component/table/Table";
import Uslugi from "../../component/uslugi/Uslugi";

const Prices = () => {
  return (
    <>
      <div className="price__showcase  ">
        <Cards
          locationPage="Главная  /  Цены"
          BigTitle="Услуги доставки из Великобритании"
        />
      </div>
      <div className="price__cards container">
        <Cardlar_1_4_7
          boshclass="cardDiv"
          imgUrl="./assets/images/page4/page4_card1.png"
          title="Ваш личный адрес для покупок"
          text="на нашем современном автоматизированном складе в безналоговом Делавэре"
          btn="btn"
        />
        <Cardlar_1_4_7
          boshclass="cardDiv"
          imgUrl={"./assets/images/page4/page4_card2.png"}
          title="Ваш личный адрес для покупок"
          text="на нашем современном автоматизированном складе в безналоговом Делавэре"
          btn="btn"
        />
        <Cardlar_1_4_7
          boshclass="cardDiv"
          imgUrl={"./assets/images/page4/page4_card3.png"}
          title="Ваш личный адрес для покупок"
          text="на нашем современном автоматизированном складе в безналоговом Делавэре"
          btn="btn"
        />
        <Cardlar_1_4_7
          boshclass="cardDiv"
          imgUrl={"./assets/images/page4/page4_card4.png"}
          title="Ваш личный адрес для покупок"
          text="на нашем современном автоматизированном складе в безналоговом Делавэре"
          btn="btn"
        />
      </div>

      <div className="price__inputs container">
        <Title
          title="Онлайн-калькулятор стоимости доставки товара"
          color="black"
        />
        <div className="price__inputs__description ">
          <Description
            description="Задайте необходимые параметры посылки, и калькулятор рассчитает приблизительную стоимость доставки вашей посылки из Англии."
            size={20}
          />
        </div>
        <InputsWrap />
      </div>

      <div className="price__table container">
        <Title title="Варианты доставки:" color="black" />
        <Table />
      </div>

      <div className="price__uslugi container">
        <Title title="Услуги склада " color="black" />
        <Uslugi />
      </div>

      <div className="price__banner">
        <Cards
          BigTitle="Услуги доставки из Великобритании"
          imgleft="./assets/images/page4/Illustration.png"
          Inp={true}
          button="Отправить"
          text2="Нажимая на кнопку вы подтверждаете согласие с правилами предоставления услуги и политикой конфиденциальности"
        />
      </div>

      {/* <div className="price__saver">
        <Title title="Страхование" color="black" />
        <Title title="Дополнительная упаковка" color="black" />
       </div> */}

      <div className="price__bottom  ">
        <Cards
          BigTitle={"Остались вопросы? Спросите нас в соцсетях!"}
          links1={"assets/images/icons-page1/Ватсап.png"}
          links2={"assets/images/icons-page1/Вайбер.png"}
          links3={"assets/images/icons-page1/Чат.png"}
        />
      </div>
    </>
  );
};

export default Prices;
