import React from 'react';
import './intro.css';
import profileImg from '../../assets/profile2.png'
import {Link} from 'react-scroll';
import getimg from '../../assets/getmycv.png'
export const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent"> 
            <span className="hello">Hello,</span>
            <span className="introText">I'm<span className="introName"> Saumya</span> <br/> Software Developer.</span>
            <p className="introPara">Blah Blah</p>
            <Link><button className="btn"><img src={getimg} alt="" className="btnimg"/>Get my CV</button></Link>
        </div>
        <img src={profileImg} alt=""  className="bg" />
    </section>
  )
}

export default Intro;