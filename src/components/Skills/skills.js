import React from 'react'
import './skills.css'
import skillllimg from '../../assets/skilllll.png'
export const Skills = () => {
  return (
    <section id='skills'>
         <span className="skillTitle">What I do</span>
         <span className="skillDesc">???</span>
         <div className="skillBars">
            <div className="skillBar">
                <img src={skillllimg} alt="skill1" className="skillBarImg"/>
                <div className="skillBarText">
                    <h2>1</h2>
                    <p>DESC OF 1</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={skillllimg} alt="skill2" className="skillBarImg"/>
                <div className="skillBarText">
                    <h2>2</h2>
                    <p>DESC OF 2</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={skillllimg} alt="skill3" className="skillBarImg"/>
                <div className="skillBarText">
                    <h2>3</h2>
                    <p>DESC OF 3</p>
                </div>
            </div>
         </div>
    </section>
  );
}

export default Skills;