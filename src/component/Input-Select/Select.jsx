import React from 'react'

const Select = ({title, img, option1, option2, option3}) => {
  return (
    <div className="select-wrap">
      <h3 className='h3'>{title}</h3>
      <div className="selects">
        <img src={img} alt="" />
        <select className='select'>
            <option className='option' value={option1}>{option1}</option>
            <option className='option' value={option2}>{option2}</option>
            <option className='option' value={option3}>{option3}</option>
        </select>
      </div>
    </div>
  )
}

export default Select