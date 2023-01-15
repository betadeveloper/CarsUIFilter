import React, { useState } from 'react'

import pickup from '../../images/12_truck_white.png'
import luxury from '../../images/04_premium.png'
import convertible from '../../images/08_convertible_white.png'
import van from '../../images/11_van_white.png'

export default function More() {
  const moreFilterOptions = ['Van', 'Luxury', 'Convertible', 'Pickup Truck']
  const [moreSelectedOptions, setMoreSelectedOptions] = useState([])
  const carPrices = {
    Van: '$50',
    Luxury: '$70',
    Convertible: '$60',
    'Pickup Truck': '$40',
  }

  function handleDivClick(event) {
    const selectedOption = event.currentTarget.querySelector('input').value
    const isOptionSelected = moreSelectedOptions.includes(selectedOption)
    if (isOptionSelected) {
      setMoreSelectedOptions(
        moreSelectedOptions.filter((item) => item !== selectedOption)
      )
    } else {
      setMoreSelectedOptions([...moreSelectedOptions, selectedOption])
    }
  }

  return (
    <div className='more-filter-dropdown'>
      {moreFilterOptions.map((option) => (
        <div
          key={option}
          className={`checkbox-option`}
          onClick={handleDivClick}
        >
          <input
            type='checkbox'
            value={option}
            checked={moreSelectedOptions.includes(option)}
            onChange={(e) => {}}
          />
          {option === 'Pickup Truck' && <img src={pickup} alt='Pickup Truck' />}
          {option === 'Luxury' && <img src={luxury} alt='Luxury' />}
          {option === 'Convertible' && (
            <img src={convertible} alt='Convertible' />
          )}
          {option === 'Van' && <img src={van} alt='Van' />}
          <label>{option}</label>
          <p id='morePrice'>{carPrices[option]}</p>
        </div>
      ))}
      <div className='selected-count'>
        {moreSelectedOptions.length > 1 ? (
          <p>{moreSelectedOptions.length} selected</p>
        ) : (
          <p>{moreSelectedOptions[0]}</p>
        )}
      </div>
    </div>
  )
}
