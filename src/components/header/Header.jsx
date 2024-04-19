import React from 'react'
import img_logo_silicon from '../../assets/images/logo_silicon.svg'
import '../header/Header.css'

const Header = () => {
  return (
    
<header>
    <div className="container">
        <a id="logo" href="home.html"><img src={img_logo_silicon} alt=""/></a>
        <div id="menu">
            <nav>
                <a href="#showcase" className="menu-link">Overview</a>
                <a href="#features" className="menu-link">Features</a>
                <a href="contact.html" className="menu-link">Contact</a>
            </nav>
        </div>

        <div className="btn-switch">
            <label>Light</label>
            <label for="switch-mode" className="switch">
                <input type="checkbox" id="switch-mode" />
                <div className="slider round"></div>
            </label>
            <label>Dark</label>
        </div>
        <div className="account-buttons">
            <a href="signIn.html" className="btn-gray"><i className="fa-regular fa-right-to-bracket"></i><span>Sign in</span></a>
            <a href="createAccount.html" className="btn-theme"><i className="fa-regular fa-user"></i><span>Sign up</span></a>
        </div>
       
        <button id="open" className="open-menu">&#9776;</button>         
        <nav className="btn-mobile" id="nav">   
            <button className="close-menu" id="close">X</button>         
            <ul className="nav-list">                                      
                <li><a href="#">Overview</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Contact</a></li>              
                <li><a href="signIn.html" className="btn-gray"><i className="fa-regular fa-right-to-bracket"></i><span>Sign in</span></a></li>
                <li><a href="createAccount.html" className="btn-theme"><i className="fa-regular fa-user"></i><span>Sign up</span></a></li>
            </ul>
        </nav>
      </div>

</header>



  )
}

export default Header