import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo2.png';
import {Link} from 'react-scroll';
import contactimg from '../../assets/contact.png';
export const Navbar = () => {
  return (
    <nav className="navbar">
        <img src={logo} alt="Logo" className="logo"/>
        <div className="desktonmenu">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopmenulistitem">Home</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="desktopmenulistitem">Projects</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="desktopmenulistitem">Skills</Link>
        </div>
        <button className="desktopMenuBtn" onClick={() => {
          document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
        }}>
        <img src={contactimg} alt="" className="desktopMenuImg" />Contact Me</button>
    </nav>
  )
}

export default Navbar
