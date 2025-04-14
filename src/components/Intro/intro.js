import React from 'react';
import './intro.css';
import bg from '../../assets/bg.png';
import bgbase from '../../assets/bgbase.png';
import btnImg from '../../assets/hireme.png';
import {Link} from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Dheeraj</span> <br />UI/UX Developer</span>
            <p className="introPara">I am a skilled Full Stack developer with experience in creating <br /> visually appealing and user friendly websites.</p>
            <Link><button className="btn"><img src={btnImg} alt="hireme" className="hireMeImg" />Hire Me</button></Link>
        </div>
        <img src={bg} alt="pic1" className="bg"></img>
        <img src={bgbase} alt="pic2" className="bgbase"></img>
    </section>
  )
}

export default Intro;