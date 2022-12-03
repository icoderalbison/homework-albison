import React from 'react'
import './faq.scss'
import Cards from '../../component/cards/Cards'
import Title from '../../component/TITLE/Title'
import Input from '../../component/Input-Select/Input'


const Faq = () => {
  return (
    <div className="faq">
      <section className='banner1 slider'>
        <Cards locationPage="Главная  /  Часто задаваемые вопросы" BigTitle="Отвечаем на вопросы доставки" />
      </section>
      <section className="container input">

        <form className='input-wraps'>

          <Input placeholder="0,5" title="Вес посылки:" />

        </form>
      </section>
      <section className='container faq'>
      <Title title="Виртуальный адрес в Великобритании" color='black' size="44" />
      
      </section>
      <section>
      <Cards BigTitle="Остались вопросы? Спросите нас в соцсетях!" links1={"./assets/images/icons-page1/Ватсап.png"} links2={"./assets/images/icons-page1/Вайбер.png"} links3={"./assets/images/icons-page1/Чат.png"}  />
      </section>
    </div>
  )
}

export default Faq