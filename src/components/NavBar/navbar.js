import React, { useState } from 'react';
import icon from '../../assets/catIcon.png';
import contactImage from '../../assets/emailIcon.png'
import menu from '../../assets/menuIcon.png'
import "./navbar.css"
import { Link } from 'react-scroll'


const  Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar"> 
      <img src={icon} alt="Logo" className="logo" />
      <div className="desktopMenu">
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500}
          className="desktopMenuListItem">Home</Link>
        <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500}
          className="desktopMenuListItem">Projects</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500}
          className="desktopMenuListItem">Skills</Link>
        <Link activeClass='active' to='resume' spy={true} smooth={true} offset={-100} duration={500}
          className="desktopMenuListItem">Resume</Link>
      </div>
      <button className="desktopMenuBtn" onClick={() => {
        document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
      }}>
        <img src={contactImage} alt="" className="desktopMenuImg" />Contact Me
      </button>

      <img src={menu} alt="Menu" className="mobMenu" onClick={() => {setShowMenu(!showMenu)}}/>
      <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500}
          className="listItem" onClick={() => {setShowMenu(false)}}>Home</Link>
          <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500}
          className="listItem" onClick={() => {setShowMenu(false)}}>Projects</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500}
          className="listItem" onClick={() => {setShowMenu(false)}}>Skills</Link>
        <Link activeClass='active' to='resume' spy={true} smooth={true} offset={-100} duration={500}
          className="listItem" onClick={() => {setShowMenu(false)}}>Resume</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500}
          className="listItem" onClick={() => {setShowMenu(false)}}>Contact Me</Link>
      </div>
    </nav>
  )
}

export default Navbar