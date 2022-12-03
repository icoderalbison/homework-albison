import React from 'react'
import Input from './Input'
import Select from './Select'
import Button from '../Buttonn/Buttonn'

const InputsWrap = () => {
  return (
    <>
    <div className="covers">
        <form className='inputWrap'>
          <Select option1="Россия" option2="Украина" option3="Америка" title="Страна:" />
          <Input type="text" placeholder="Москва" title="Город:" />
          <Input placeholder="Введите индекс" title="Индекс:" />
          <Input placeholder="0,5" title="Вес посылки:" />
          <Select option1="Выберите услуги" option2="Nндекс" option3="Город" title="Дополнительные услуги:" />
          <Button width='100%' />
        </form>
    </div>
    </>
  )
}

export default InputsWrap