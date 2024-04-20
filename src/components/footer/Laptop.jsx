import React from 'react'
import './Laptop.css'
import laptop from '../../../assets/images/Laptop.svg'

const Laptop = () => {
  return (
    <section id="laptop-image">
        <div className="container">
            <div className="h1Color">                            
                <h1><span className="h1Black">Switch Between</span> Light & Dark Mode</h1>
            </div>
            <img src={laptop}/>
        </div>       
    </section>
  )
}

export default Laptop