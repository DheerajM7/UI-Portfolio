import React from 'react';
import './works.css';

export const Works = () => {
  return (
    <section id="works">
        <h2 className="worksTitle">My Portfolio</h2>
        <span className="worksDesc">
            Proven ability to seamlessly integrate cutting-edge frontend design with robust backend functionality, delivering dynamic and user-centric web applications from concept to launch.
        </span>

        <div className="skillBlock">
            <h2>SKILLS</h2>
            <div className="skills">
                <div className="skill">
                    <p>HTML5</p>
                </div>
                <div className="skill">
                    <p>CSS3</p>
                </div>
                <div className="skill">
                    <p>Javascript</p>
                </div>
                <div className="skill">
                    <p>TypeScript</p>
                </div>
                <div className="skill">
                    <p>React</p>
                </div>
                <div className="skill">
                    <p>Node JS</p>
                </div>
                <div className="skill">
                    <p>Express</p>
                </div>
                <div className="skill">
                    <p>SQL</p>
                </div>
                <div className="skill">
                    <p>Java</p>
                </div>
                <div className="skill">
                    <p>Protractor</p>
                </div>
                <div className="skill">
                    <p>Firebase</p>
                </div>
                <div className="skill">
                    <p>JQuery</p>
                </div>
                <div className="skill">
                    <p>Bootstrap</p>
                </div>
                <div className="skill">
                    <p>Mongo</p>
                </div>
                <div className="skill">
                    <p>Version Control</p>
                </div>
                <div className="skill">
                    <p>Grunt</p>
                </div>
                <div className="skill">
                    <p>Gulp</p>
                </div>
                <div className="skill">
                    <p>Travis CI</p>
                </div>
                <div className="skill">
                    <p>Python</p>
                </div>
                <div className="skill">
                    <p>Adobe</p>
                </div>
                <div className="skill">
                    <p>Figma</p>
                </div>
                <div className="skill">
                    <p>Unity</p>
                </div>
                <div className="skill">
                    <p>PHP</p>
                </div>
                <div className="skill">
                    <p>ServiceNow</p>
                </div>
                <div className="skill">
                    <p>Gen AI</p>
                </div>
            </div>
        </div>


        <div className="projects">
            <h1 className="projectTitle"> PROJECTS</h1>
            <div className="project">
                <h2>Goldman Sachs Software Engineering Program</h2>
                <ul>
                    <li>Completed Goldman Sachs governance analyst program responsible for assessing IT security and suggesting improvements.</li>
                    <li>Identified that the company was using an outdated password hashing algorithm by cracking passwords using Hashcat.</li>
                    <li>Wrote a memo for my supervisor summarizing a range of proposed uplifts to increase the company’s level of password protection including extending minimum password length and using a dedicated hashing algorithm</li>
                </ul>
            </div>
            <div className="project">
                <h2>Weather Dashboard using React, OpenWeatherMap API and Tailwind CSS</h2>
                <ul>
                    <li>Designed a weather dashboard that provides users with real-time weather information and forecasts.</li>
                    <li>Implemented Interactive weather icons and background changes based on weather conditions.</li>
                    <li>Made a responsive design for different screen sizes.</li>
                </ul>
            </div>
            <div className="project">
                <h2>Built a Mobile App with Scrimba</h2>
                <ul>
                    <li>Designed and implemented the user interface using Flutter for seamless performance on both iOS and Android platforms</li>
                    <li>Integrated Firebase Authentication to enable secure user sign-in and sign-up using email, Google, and Facebook.</li>
                    <li>Utilized Firebase Firestore for real-time database functionality, ensuring user data is synced across devices instantly.</li>
                    <li>Implemented Firebase Cloud Functions to handle server-side logic for data validation, user notifications, and automated backup</li>
                </ul>
            </div>
            <div className="project">
                <h2>Task Management System using Node.js and Mongo DB</h2>
                <ul>
                    <li>This project allows users to manage tasks with basic CRUD operations </li>
                    <li>Users can add tasks with titles, descriptions, and statuses (e.g., pending, completed).</li>
                    <li>The application will provide RESTful APIs to interact with tasks stored in a MongoDB database.</li>
                </ul>
            </div>
        </div>
        <button className="workBtn">See More</button>
    </section>
  )
}

export default Works;
