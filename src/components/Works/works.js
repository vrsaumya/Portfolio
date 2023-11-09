import React from 'react';
import './works.css'
import p1 from '../../assets/proj1.png'
import p2 from '../../assets/proj2.png'
import p3 from '../../assets/proj3.png'
import p4 from '../../assets/proj4.png'
import p5 from '../../assets/proj5.png'

export const Works = () => {
  return (
    <section id="works">
        <h2 className="workstitle">Projects</h2>
        <span className="worksDesc">listing them</span>
        <div className="worksImgs">
            <img src={p1} alt="p1" className="worksImg" />
            <img src={p2} alt="p2" className="worksImg" />
            <img src={p3} alt="p3" className="worksImg" />
            <img src={p4} alt="p4" className="worksImg" />
            <img src={p5} alt="p5" className="worksImg" />
        </div>
        <button className="workBtn">See More</button>
    </section>
  );
}

export default Works;