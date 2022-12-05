import React from "react";
import InfoCards from "../InfoCards";
// import "./exampleForMap.scss"; //page1
import "./exampleForMapPage6.scss"; //page6


let datasPage1 = [
  {
    img: "assets/images/page1/calendarIcon.svg",
    title: "Больше не значит дороже",
    text: "С ростом веса посылки цена за каждые 0.5 кг уменьшается в прогрессии.",
  },
  {
    img: "assets/images/page1/timerIcon.svg",
    title: "Быстрая обработка посылок",
    text: "Посылка обрабатывается не дольше 48 часов после поступления на склад.",
  },
  {
    img: "assets/images/page1/phoneIcon.svg",
    title: "SMS-уведомления",
    text: "Отслеживайте весь процесс с помощью sms-уведомлений.",
  },
];

let datasPage6 = [
  {
    img: "assets/images/page6/page6_card1.png",
    title: "Дарим скидку 10% вашим друзьям и подписчикам",
    text: "На их первую отправленную посылку. Вам есть чем мотивировать зарегистрироваться именно по вашему реферальному коду или ссылке.",
  },
  {
    img: "assets/images/page6/page6_card2.png",
    title: "Платим по £3 за отправленную посылку ",
    text: "Когда клиент, привлеченный по вашей ссылке, отправляет посылку – на ваш счет поступает $3. Вы можете оплачивать этими деньгами ваши посылки или выводить их себе на счет.",
  },
  {
    img: "assets/images/page6/page6_card3.png",
    title: "Промо на любой вкус",
    text: "Автоматические или персональные реферальные коды для отправки друзьям или подписчикам в мессенджеры или социальные сети, а также реферальные ссылки и баннеры для ваших сайтов.",
  },
  {
    img: "assets/images/page6/page6_card4.png",
    title: "Выплаты по запросу",
    text: "Платим по первому вашему требованию без задержек и других сложностей. Если на счету менее $50 – вы можете тратить их на оплату товаров или доставки. Если больше – выводить на свой счет.",
  },
  {
    img: "assets/images/page6/page6_card5.png",
    title: "Начисляем кэшбэк £1 на 1 посылку",
    text: "За каждую отправленную посылку , возможность оплатить после бонусного счета в 10 фунтов ",
  },
];

function ExampleForMap() {
  return (
    <div className="container">
    <div className="mapInfoCards">
      {datasPage6.map((el, index) => (
        <InfoCards {...el} />
      ))}
    </div>
    </div>
  );
}

export default ExampleForMap;
