import React from 'react'
import './style.scss'

const data = [
    {
        title: 'Дарим скидку 10% вашим друзьям и подписчикам',
        description: 'На их первую отправленную посылку. Вам есть чем мотивировать зарегистрироваться именно по вашему реферальному коду или ссылке.',
        img: 'assets/images/Group 24.png'
    },
    {
        title: 'Дарим скидку 10% вашим друзьям и подписчикам',
        description: 'На их первую отправленную посылку. Вам есть чем мотивировать зарегистрироваться именно по вашему реферальному коду или ссылке.',
        img: 'assets/images/Group 25.png'
    },
    {
        title: 'Дарим скидку 10% вашим друзьям и подписчикам',
        description: 'На их первую отправленную посылку. Вам есть чем мотивировать зарегистрироваться именно по вашему реферальному коду или ссылке.',
        img: 'assets/images/Group 26.png'
    },
    {
        title: 'Дарим скидку 10% вашим друзьям и подписчикам',
        description: 'На их первую отправленную посылку. Вам есть чем мотивировать зарегистрироваться именно по вашему реферальному коду или ссылке.',
        img: 'assets/images/Group 25 (1).png'
    },
    {
        title: 'Дарим скидку 10% вашим друзьям и подписчикам',
        description: 'На их первую отправленную посылку. Вам есть чем мотивировать зарегистрироваться именно по вашему реферальному коду или ссылке.',
        img: 'assets/images/Group 69.png'
    },
]

function Zarabivat() {
  return (
    <div className='zarabivat'>
        <h1 className="title-h1">Зарабатывать с нами — проще простого:</h1>
        <div className="zarabivat__boxes">
            {
                data.map(data => <div className='box'>
                    <img src={data.img} alt="" />
                    <h1>{data.title}</h1>
                    <p>{data.description}</p>
                </div>)
            }
        </div>
    </div>
  )
}

export default Zarabivat