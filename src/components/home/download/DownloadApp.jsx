import React from 'react'

const DownloadApp = ({title, img , text, text2, img2}) => {
  return (
    <div class="appstore">
        <h6>{title}</h6>
        <img src={img}/>
        <div class="choice">
            <div>
                <h4>{text}</h4>
                <p>{text2}</p>
            </div> 
            <img src={img2} alt=""/>   
        </div>  
   </div> 
  )
}

export default DownloadApp