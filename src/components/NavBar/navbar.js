import React from 'react';
import icon from '../../assets/icon.ico';
import contactImage from '../../assets/emailIcon.png'
import "./navbar.css"
import { Link } from 'react-scroll'

const  Navbar = () => {
  return (
    <nav className="navbar"> 
      <img src={icon} alt="Logo" className="logo" />
      <div className="desktopMenu">
        <Link className="desktopMenuListItem">Home</Link>
        <Link className="desktopMenuListItem">About</Link>
        <Link className="desktopMenuListItem">Resume</Link>
      </div>
      <button className="desktopMenuBtn">
        <img src={contactImage} alt="" className="desktopMenuImg" />
        <p>Contact Me</p>
      </button>
    </nav>
    
  )
}

export default Navbar