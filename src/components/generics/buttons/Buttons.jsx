import React from 'react'
import '../buttons/Buttons.css'

const Buttons = ({url, title, type}) => {
   
  const getButtonClassName = () => {
    switch(type) {
      case 'blue':
        return 'btn-theme'
      case 'blue-m': 
        return 'btn-theme-s'
      case 'gray': 
        return 'btn-gray'
      default: 
        return 'btn-social'
      
    }
  }

  return (

    <button href={url} className={getButtonClassName()}>{title}<img src="images/arrow.svg" alt=""/></button>

  )
}

export default Buttons