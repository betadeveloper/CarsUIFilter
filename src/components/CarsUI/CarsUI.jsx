import React, { useState, useEffect } from 'react'
import More from '../More/More'
import './CarsUI.css'
import CarOption from '../CarOption/CarOption.jsx'

export default function CarsUI() {
  const mainFilterOptions = ['Small', 'Medium', 'Large', 'SUV']
  const [selectedOptions, setSelectedOptions] = useState([])
  const [selectedMore, setSelectedMore] = useState(false)
  const [showMoreFilter, setShowMoreFilter] = useState(false)

  function handleDivClick(selectedOption) {
    if (selectedOptions.includes(selectedOption)) {
      setSelectedOptions(
        selectedOptions.filter((item) => item !== selectedOption)
      )
    } else {
      setSelectedOptions([...selectedOptions, selectedOption])
    }
  }

  function handleMoreFilter() {
    setShowMoreFilter(!showMoreFilter)
    setSelectedMore(!selectedMore)
  }

  function handleReset() {
    setSelectedOptions([])
    setSelectedMore(false)
  }

  useEffect(() => {
    function handleDocumentClick(e) {
      if (showMoreFilter && !e.target.closest('.more-container')) {
        setShowMoreFilter(false)
        setSelectedMore(false)
      }
    }
    document.addEventListener('click', handleDocumentClick)
    return () => {
      document.removeEventListener('click', handleDocumentClick)
    }
  }, [showMoreFilter])

  return (
    <div className='car-filter'>
      <p>Car type</p>
      <div className='main-filter'>
        <div className='reset-button'>
          {selectedOptions.length > 0 && (
            <button onClick={handleReset}>Reset</button>
          )}
        </div>
        {mainFilterOptions.map((option) => (
          <CarOption
            option={option}
            handleDivClick={handleDivClick}
            selectedOptions={selectedOptions}
          />
        ))}
        <div className='more-container'>
          <button
            className={`more-button ${selectedMore ? 'selected' : ''}`}
            onClick={handleMoreFilter}
          >
            More
            {selectedOptions.length > 0 && (
              <div className='x-button'>
                <button
                  onClick={handleReset}
                  className={`${selectedMore ? 'selected' : ''}`}
                >
                  X
                </button>
              </div>
            )}
          </button>
          {showMoreFilter && (
            <More
              setSelectedOptions={setSelectedOptions}
              handleDivClick={handleDivClick}
            />
          )}
        </div>
      </div>
    </div>
  )
}
