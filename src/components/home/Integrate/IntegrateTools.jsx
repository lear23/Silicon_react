import React from 'react'

const IntegrateTools = ({img, text, url}) => {
  return (
    <a href={url} class="tools">
        <img src={img} alt=""/>
        <p>{text}</p>
    </a>
  )
}

export default IntegrateTools


