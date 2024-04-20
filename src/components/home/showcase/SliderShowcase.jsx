import React from 'react'
import './SliderShowcase.css' 
import Logo_images1 from '../../../assets/images/brandipsum1.svg'
import Logo_images2 from '../../../assets/images/brandipsum2.svg'
import Logo_images3 from '../../../assets/images/brandipsum3.svg'
import Logo_images4 from '../../../assets/images/brandipsum4.svg'

const SliderShowcase = () => {
  const imagePaths =[
    Logo_images1,
    Logo_images2,
    Logo_images3,
    Logo_images4,
    Logo_images1,
    Logo_images2,
    Logo_images3,
    Logo_images4,
  ]



  return (
    <div className="brands">
            {imagePaths.map((image, index) => (
            <img key={index} src={image} alt={`brandipsum ${index + 1}`} />
            ))}
   </div>
  )
}

export default SliderShowcase