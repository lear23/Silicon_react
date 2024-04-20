import React from 'react'

const BoxFeatures = ({img, title, description}) => {
  return (
    <div class="box">
        <img src={img} alt=""/>
        <h5>{title}</h5>
        <p>{description}</p>
    </div>
  )
}

export default BoxFeatures