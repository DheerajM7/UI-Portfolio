import React from 'react';
import './workexperience.css';

export const WorkExperience = () => {
  return (
    <section id="workExperience">
        <h2 className="workExperienceTitle">Work Experience</h2>
        <span className="workExperienceDesc">
            Extensive experience in UI/UX development and design across various industries, focusing on creating intuitive, accessible, and engaging user interfaces.
        </span>

        <div className="experiences">
            
            <div className="experience">
                <h2>FIRST HORIZON BANK - USA</h2>
                <h3>Sr. UI/UX Developer</h3>
                <h4>DEC 2023 – Present</h4>
                <p>
                    Redesigned and optimized the online banking platform's user experience, focusing on
                    improving customer engagement and satisfaction. Collaborated with cross-functional teams to deliver
                    intuitive and accessible UI solutions while ensuring compliance with regulatory standards (WCAG, PCI-DSS,
                    GDPR). Enhanced digital banking interfaces by incorporating innovative designs, improving usability, and
                    driving business objectives through user-centric design principles.
                </p>
            </div>
            
            <div className="experience">
                <h2>HEALTH CATALYST INC - USA</h2>
                <h3>UX Designer</h3>
                <h4>DEC 2022 - NOV 2023</h4>
                <p>
                    Designed and developed user-centric interfaces for a federal healthcare data management
                    system, supporting secure and scalable integration of patient records, insurance claims, and compliance
                    reporting. Collaborated with stakeholders to ensure the platform adhered to healthcare regulations like
                    HIPAA, focusing on usability, accessibility, and intuitive design for multiple federal agencies.
                </p>
            </div>
            
            <div className="experience">
                <h2>CTS PVT. LTD - INDIA</h2>
                <h3>IT Developer II (UX Consultant)</h3>
                <h4>APRIL 2020 – AUG 2022</h4>
                <p>
                    Developed a user-focused enterprise-grade ERP system for the manufacturing industry,
                    streamlining production planning, inventory management, and vendor coordination. Collaborated with cross-
                    functional teams to create intuitive and visually engaging interfaces, improving operational workflows and
                    reducing costs.
                </p>
            </div>
            
            <div className="experience">
                <h2>MASTERCARD - INDIA</h2>
                <h3>UI/UX Frontend Engineer</h3>
                <h4>JAN 2018 – MAR 2020</h4>
                <p>
                    Contributed to the development of Smart Data, Mastercard's web-based expense
                    management system, delivering intuitive and visually appealing user interfaces to help businesses monitor
                    and manage costs effectively. Focused on creating user-centric designs that enhance engagement and
                    satisfaction while maintaining seamless integration with Salesforce Lightning and backend services.
                </p>
            </div>
        </div>
    </section>
  )
}

export default WorkExperience;
