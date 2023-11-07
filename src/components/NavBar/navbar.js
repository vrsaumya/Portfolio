import React from 'react';
import './navbar.css';
import logo from '../../assets/logo2.png';
import {Link} from 'react-scroll';
import contactimg from '../../assets/contact.png';
export const Navbar = () => {
  return (
    <nav className="navbar">
        <img src={logo} alt="Logo" className="logo"/>
        <div className="desktonmenu">
            <Link className="desktopmenulistitem">Home</Link>
            <Link className="desktopmenulistitem">About</Link>
            <Link className="desktopmenulistitem">Projects</Link>
            <Link className="desktopmenulistitem">Skills</Link>
        </div>
        <button className="desktopMenuBtn">
            <img src={contactimg} alt="" className="desktopMenuImg" />Contact Me</button>
    </nav>
  )
}

export default Navbar
