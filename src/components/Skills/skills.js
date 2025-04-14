import React from 'react'
import './skills.css';
import UIDesign from '../../assets/uxui.png';
import WebDesign from '../../assets/webdev.png';
import AppDesign from '../../assets/appdev.png';

const Skills = () => {
  return (
    <section id='skills'>
        <span className="skillTitle">
            What I Do
        </span>
        <span className="skillDesc">
            Experienced UI UX designer skilled in both frontend and backend development, creating responsive, visually appealing, and robust websites. Passionate about innovative web technologies and best practices.
        </span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={UIDesign} alt="UIDesign" className="skillBarImg"/>
                <div className="skillBarText">
                    <h2>UI/UX Design</h2>
                    <p> UI/UX developer specializing in designing intuitive, user-centered interfaces and seamless user experiences.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={WebDesign} alt="WebDesign" className="skillBarImg"/>
                <div className="skillBarText">
                    <h2>Web Development</h2>
                    <p>Skilled in building dynamic and responsive websites using modern frontend and backend technologies.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={AppDesign} alt="AppDesign" className="skillBarImg"/>
                <div className="skillBarText">
                    <h2>App Design</h2>
                    <p>Skilled application developer proficient in creating robust and user-friendly applications across various platforms.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills;

