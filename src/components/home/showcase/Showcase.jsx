import React from 'react'
import '../showcase/Showcase.css'

import image_showcase from '../../../assets/images/imageShowcase.svg'

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
                <div class="brands">
                    <img src="images/brandipsum1.svg" alt=""/>
                    <img src="images/brandipsum2.svg" alt=""/>
                    <img src="images/brandipsum3.svg" alt=""/>
                    <img src="images/brandipsum4.svg" alt=""/>
                </div>
            </div>
        </div>

    </section>


  )
}

export default Showcase