import React from 'react'
import '../CarsUI/CarsUI.css'
import small from '../../images/01_mini_white.png'
import medium from '../../images/02_economy_white.png'
import large from '../../images/03_standard_white.png'
import suv from '../../images/05_suv-small_white.png'

export default function CarOption({ option, selectedOptions, handleDivClick }) {
  let carImage
  switch (option) {
    case 'Small':
      carImage = small
      break
    case 'Medium':
      carImage = medium
      break
    case 'Large':
      carImage = large
      break
    case 'SUV':
      carImage = suv
      break
    default:
      carImage = small
  }
  return (
    <div
      key={option}
      className={`checkbox-option main-option ${
        selectedOptions.includes(option) ? 'selected' : ''
      }`}
      onClick={() => handleDivClick(option)}
    >
      <div className='tooltip'>$123+</div>
      <img src={carImage} alt={option} />
      <label>{option}</label>
    </div>
  )
}
