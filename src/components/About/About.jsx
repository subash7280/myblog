import React from 'react';
import NgpLogo from '../../assets/ngpLogo.png';
import schoolLogo from '../../assets/schoolLogo.png';
import './About.css';

const Skills = () => {

  return (
    <section id='about'>
      <span className='skillTitle' >What I Am?</span>
      <br />
      <span className='skillDesc' >A dedicated and hardworking professional with a solid foundation in Computer Science and Engineering. I bring a strong work ethic, adaptability, and a commitment to ongoing learning to my role, all geared towards contributing to my company's success.</span>

      <div className='skillBars' >
        <span className='educationTitle' >What's My Education?</span>
        <div className="skillBar">
          <img src={NgpLogo} className='instituteLogo' alt="" />
          <div className="skillBarText">
            <h4 className='yearPassed' >2019 - 2023</h4>
            <h4 className='instituteName' >Dr.N.G.P. INSTITUTE OF TECHNOLOGY</h4>
            <p className='degreeName' >Bachelor's Degree in Engineering - 81%</p>
            <p className='locationName' >Coimbatore, India.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={schoolLogo} className='instituteLogo' alt="" />
          <div className="skillBarText">
            <h4 className='yearPassed' >2018 - 2019</h4>
            <h4 className='instituteName' >KONGU VELLALAR MATRIC HIGHER SECONDARY SCHOOL</h4>
            <p className='degreeName' >HSC - 68.8%</p>
            <p className='locationName' >Tirupur, India.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={schoolLogo} className='instituteLogo' alt="" />
          <div className="skillBarText">
            <h4 className='yearPassed' >2016 - 2017</h4>
            <h4 className='instituteName' >KONGU VELLALAR MATRIC HIGHER SECONDARY SCHOOL</h4>
            <p className='degreeName' >SSLC - 93.4%</p>
            <p className='locationName' >Tirupur, India.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;