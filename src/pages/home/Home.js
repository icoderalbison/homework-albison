import React from 'react'
import './home.scss'
import cardForProduct from './cardForProduct.json'
import blogCard from './blogCard.json'
import infoCard from './info-card'
import Cards from '../../component/cards/Cards'
import Title from '../../component/TITLE/Title'
import Description from '../../component/TITLE/Description'
import Table from '../../component/table/Table'
import InputsWrap from '../../component/Input-Select/InputsWrap'
import Cardlar_1_4_7 from '../../component/Cardlar_1_4_7/cardlar_1_4_7'
import Button from '../../component/Buttonn/Buttonn'
import InfoCards from '../../component/infoCards/InfoCards'
import BlogerCard from '../../component/BlogerCard/BlogerCard'
import Slide from '../../component/slider/Slider'
import Slide2 from '../../component/slider/Slide2'
import Jacket from '../../component/Jacket/Jacket'
const Home = () => {
  return (
    <div className='home'>
      <section className='banner1'>
        <Cards BigTitle="Доставка товаров из Великобритании в Россию" text='Начните экономить до 80% на шопинге. Регистрируйтесь в OkeyPost, чтобы покупать со скидками в UK одежду, обувь, гаджеты известных брендов и безопасно отправлять вещи в Россию.'
          button={'Получить адрес в UK'}
          imgRight={'./assets/images/page1/page1_showcase1.png'} />
      </section>
      <section className='slider container '>
        <Title title="Насколько выгодно покупать?" color='black' size="44" />
        <Slide/>
        <Jacket/>
        <Slide2/>
      </section>
      <section className='banner2'>
        <Cards imgleft={'./assets/images/page1/page1_showcase2.png'}
          BigTitle="Поручите нашим мастерам шопинга оформить заказы в английских магазинах и освободите время для более важных дел."
          text="Такой способ покупки также подойдёт, если магазин принимает только английские карты."
          button={"Попробовать"}
        />
      </section>
      <section className='okeyPost container'>
        <Title
          title="OkeyPost удобная и быстрая доставка посылок из Великобритании "
          color="black"
          size="44"
        />
        <Description
          description="Рассчитайте стоимость доставки из Англии к вам домой. Мы получим ваши посылки на складе, при необходимости объединим несколько доставок в одну и отправим их к вам надежно упакованными."
          size="20"
        />
        <InputsWrap />

      </section>
      <section className='container variant_dostavki'>
        <Title
          title="Варианты доставки:"
          color="black"
          size="36"
        />
        <div className='table'>
          <Table />

        </div>
      </section>
      <section className='container forSales'>
        <Title
          title="4 простых шага для ваших покупок в Великобритании "
          color="black"
          size="44"
        />
        <div className='card_wrapper'>
          {
            cardForProduct.map((item) => {
              return (
                <Cardlar_1_4_7 key={item.id}
                  boshclass="cardDiv"
                  btn="none"
                  imgUrl={item.imgUrl}
                  title={item.title}
                  text={item.text}
                />
              )
            })
          }


        </div>
        <Description
          description="Не хотите разбираться самостоятельно, наши мастера шопинга с радостью купят все товары за вас."
          size="20"
        />
        <div className="forSales__button">
          <Button value='Быстрая покупка' width="240px" />
        </div>
      </section>
      <section className='banner3'>
        <Cards imgleft={'./assets/images/page1/page1_showcase3.png'}
          BigTitle="Виртуальный тур по нашему складу в реальном времени"
          text="Вы можете всегда посмотреть на нашу слаженую работу на складе"
          button={"Попробовать"}
        />
      </section>
      <section className='container info'>
        <Title
          title="120 000 довольных клиентов в России уже сделали свой выбор"
          color="black"
          size="44"
        />
        <Description
          description="За последний год десятки тысяч наших клиентов заказали товары из Англии и оставили 19 633 отзыва"
          size="20"
        />
        <div className="info-card-wrapper">
          {infoCard.map((item, ind) => <InfoCards key={ind} img={item.img} title={item.title} text={item.text} />)}
        </div>

      </section>
      <section className='otziv container'>
        <Title
          title="Отзывы и цитаты блогеров:"
          color="black"
          size="44"
        />
        <div className="otziv-crad">
          {
            blogCard.map(item => <BlogerCard key={item.id} image={item.image} img={item.img} title={item.title} desc={item.desc} address={item.address} date={item.date} />)
          }

        </div>
        <div className="otziv__button">
          <Button value='Все отзывы' width="240px" />
        </div>
      </section>
      <section className='container content'>
        <Title
          title="Ваш личный адрес в Великобритании  для покупок"
          color="black"
          size="44"
        />
        <Description
          description="С нами вы получаете целых два адреса в UK! У нас есть два склада для приема посылок – в Лондоне и Манчестере. Указывайте в магазине тот из них, отправка на который обойдется дешевле (или покупка будет без налогов). Чаще всего в Лондоне наши клиенты заказывают одежду и обувь, а в Манчестер идут гаджеты и всё остальное. С OkeyPost вы всегда получаете максимальную выгоду!"
          size="20"
        />
        <Description
          description="
          При доставке из UK в Россию все ваши товары обязательно страхуются. Прием посылок на наш склад, их обработка, удаление лишних коробок, хранение сроком до 70 дней – у нас полностью бесплатно. Мы также бесплатно проводим объединение посылок из разных магазинов в одну. Это необходимо для снижения стоимости доставки посылок из UK в Россию."
          size="20"
        />
        <Description
          description="
            У нас самая выгодная доставка! От $11.99 за посылку! А если у вас есть какие-то особенные требования, вроде проверки техники или дополнительной пленки для самых хрупких товаров, – операторы нашего склада с радостью выполнят их по спецзапросу."
          size="20"
        />
        <Description
          description="
            Okeypost.com – это надежно, быстро и выгодно. А в наших соцсетях вы всегда найдете информацию о лучших скидках fyukbqcrb[ магазинов. Не обязательно заходить в Черную пятницу или Prime Day, крутые акции проходят каждый день!"
          size="20"
        />
      </section>
      <section className='banner4 slider'>
        <Cards BigTitle="Подпишитеть и будьте в курсе всех скидок и акций магазинов Великобритании!"
          buttonRight={'Подписаться'}
           />
      </section>
    </div>
  )
}

export default Home