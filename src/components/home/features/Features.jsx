import React from 'react'
import '../features/Features.css'
import BoxFeatures from './BoxFeatures'
import box_icon from '../../../assets/images/icon.svg'
import box_icon2 from '../../../assets/images/icon2.svg'
import box_icon3 from '../../../assets/images/icon3.svg'
import box_icon4 from '../../../assets/images/icon4.svg'
import box_icon5 from '../../../assets/images/icon5.svg'
import box_icon6 from '../../../assets/images/icon6.svg'

const Features = () => {
  return (
    <section id="features">
            <div class="container">
                <h1>What Do You Get with Our Tool?</h1>
                <p>Make sure all your tasks are organized so you can set the priorities and focus on important.</p>
                <div class="tool-features">
                    <BoxFeatures img ={box_icon} title="Coments on Tasks" description="Id mollis consectetur congue egestas egestas suspendisse blandit justo."   />
                    <BoxFeatures img ={box_icon2} title="Tasks Analytics" description="Id mollis consectetur congue egestas egestas suspendisse blandit justo."   />
                    <BoxFeatures img ={box_icon3} title="Multiple Assignees" description="Non imperdiet facilisis nulla tellus Morbi scelerisque eget adipiscing vulputate."   />
                    <BoxFeatures img ={box_icon4} title="Notifications" description="Diam, suspendisse velit cras ac. Lobortis diam volutpat, eget pellentesque viverra."   />
                    <BoxFeatures img ={box_icon5} title="Sections & Subtasks" description="Id mollis consectetur congue egestas egestas suspendisse blandit justo."   />
                    <BoxFeatures img ={box_icon6} title="Data Security" description="Aliquam malesuada neque eget elit nulla vestibulum nunc cras."   />
                  
                </div>
            </div>
    </section>
  )
}

export default Features