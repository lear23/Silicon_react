import React from 'react'

const Manager = () => {
  return (
    <section id="manage">
        <div className="container">
            <div className="manageimage">
                <img src="images/taskMsterimage.svg" alt=""/>
            </div>
            <div className="Manage">
                <h2>Manage Your Work</h2>
                <p><img src="images/bx-check-circle.svg" alt=""/> Powerful project management</p>
                <p><img src="images/bx-check-circle.svg" alt=""/> Transparent work management</p>
                <p><img src="images/bx-check-circle.svg" alt=""/> Manage work & focus on the most important tasks</p>
                <p><img src="images/bx-check-circle.svg" alt=""/> Track your progress with interactive charts</p>
                <p><img src="images/bx-check-circle.svg" alt=""/> Easiest way to track time spent on tasks</p>

                <a href=""><button className="btn-theme">Learn more <img src="images/arrow.svg" alt=""/></button></a>
            </div>
        </div>

    </section>
  )
}

export default Manager