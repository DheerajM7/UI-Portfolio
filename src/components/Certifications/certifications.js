import React from 'react'
import './certifications.css';
// Import certification icons
import awsIcon from '../../assets/aws-cert.png';
import oracleIcon from '../../assets/oracle-cert.png';

const Certifications = () => {
  return (
    <section id='certifications'>
        <span className="certTitle">
            My Certifications
        </span>
        <span className="certDesc">
            Professional certifications that validate my expertise and technical skills in cloud development and artificial intelligence.
        </span>
        <div className="certBars">
            <div className="certBar">
                <img src={awsIcon} alt="AWS Certification" className="certBarImg"/>
                <div className="certBarText">
                    <h2>AWS Certified Developer Associate</h2>
                    <p>Validated expertise in developing, deploying, and debugging cloud-based applications using AWS services, demonstrating proficiency in core AWS services, best practices, and application lifecycle management.</p>
                </div>
            </div>
            <div className="certBar">
                <img src={oracleIcon} alt="Oracle Certification" className="certBarImg"/>
                <div className="certBarText">
                    <h2>Oracle Certified Generative AI</h2>
                    <p>Certified expertise in Oracle's generative AI technologies, showcasing skills in implementing and optimizing AI solutions for enterprise applications and data-driven decision making.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Certifications;
