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
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500}
          className="desktopMenuListItem">Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500}
          className="desktopMenuListItem">About</Link>
        <Link activeClass='active' to='resume' spy={true} smooth={true} offset={-100} duration={500}
          className="desktopMenuListItem">Resume</Link>
      </div>
      <button className="desktopMenuBtn" onClick={() => {
        document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
      }}>
        <img src={contactImage} alt="" className="desktopMenuImg" />
        <p>Contact Me</p>
      </button>
    </nav>
    
  )
}

export default Navbar