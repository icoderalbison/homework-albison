import React from 'react'
import Cards from '../../component/cards/Cards'
import ExampleForMap from '../../component/infoCards/examopleForMap/ExampleForMap'
import Title from '../../component/TITLE/Title'
import './bonuses.scss'

const Bonuses = () => {
  return (
    <div className="bonuses">
      <Cards locationPage="Главная  /  Бонусы и партнёрская программа" MiniTitle="Бонусы и партнёрская программа" text="Платим $3 с каждой отправленной посылки" button={'Начать зарабатывать'} />
      <section className="container bonusTit">

        <Title title="Зарабатывать с нами — проще простого:" color="black" size="44" />
      </section>
      <section >
        <ExampleForMap />
      </section>


      <section className="cardLast">
      <Cards imgleft="assets/images/page6/page6ShowcCard.png" MiniTitle={'Готовы начать зарабатывать вместе с нами?'} text="Присоединяйтесь к партнерской программе Okeypost.com уже сегодня!" button={'Присоедениться'} />
      </section>

    </div>
  )
}

export default Bonuses