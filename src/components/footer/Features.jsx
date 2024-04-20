import React from 'react'
import '../features/Features.css'
import BoxFeatures from './BoxFeatures'
import box_icon from '../../../assets/images/icon.svg'

const Features = () => {
  return (
    <section id="features">
            <div class="container">
                <h1>What Do You Get with Our Tool?</h1>
                <p>Make sure all your tasks are organized so you can set the priorities and focus on important.</p>
                <div class="tool-features">
                    <BoxFeatures img ={box_icon} title="" description=""   />
                    <BoxFeatures img ={box_icon} title="" description=""   />
                    <BoxFeatures />
                    <BoxFeatures/>
                    <BoxFeatures/>
                    <BoxFeatures/>
                    <BoxFeatures/>
                </div>
            </div>
    </section>
  )
}

export default Features