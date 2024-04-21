import React from 'react'
import '../manager/Manager.css'
import ManageBox from './ManageBox'
import circle from '../../../assets/images/bx-check-circle.svg'
import  task_master from '../../../assets/images/taskMsterimage.svg'

const Manager = () => {
  return (
    <section id="manage">
        <div className="container">
            <div className="manageimage">
                <img src={task_master} alt=""/>
            </div>
            <div className="Manage">
                <h2>Manage Your Work</h2>
                    <ManageBox img={circle} text= "Transparent work management" />
                    <ManageBox img={circle} text="Manage work & focus on the most important tasks" />
                    <ManageBox img={circle} text=" Track your progress with interactive charts" />
                    <ManageBox img={circle} text="Easiest way to track time spent on tasks" />
                    <ManageBox img={circle} text="Easiest way to track time spent on tasks"/> 
                  <a href=""><button className="btn-theme">Learn more <img src="images/arrow.svg" alt=""/></button></a>
            </div>
        </div>

    </section>
  )
}

export default Manager