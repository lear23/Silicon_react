import React from 'react'
import '../showcase/Showcase.css'

import image_showcase from '../../../assets/images/imageShowcase.svg'
import SliderShowcase from './SliderShowcase'

const Showcase = () => {
  return (
    
    <section id="showcase">
        <img class="background-image" src={image_showcase} alt="showcase image"/>
        <div class="container">

            <div class="content">
                <h1 class="d4">Task Management Assistant You Gonna Love</h1>
                <p>We offer you a new generation of task management system. Plan, manage & track all your tasks in one flexible tool.</p>
                <a href="#" class="btn-theme">Get Started for free</a>
                <h6>Largest companies use our tool to work efficiently</h6>

                <div className='slider-container'>                  
                    
                            <SliderShowcase/>
                  
                </div>
                
            </div>
        </div>

    </section>


  )
}

export default Showcase