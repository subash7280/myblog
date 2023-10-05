import React from 'react';
// import background from '../../assets/myimg1.png';
// import background from '../../assets/myimg2.png';
import background from '../../assets/myimg3.png';
import { Link } from 'react-scroll';
import btnImg from '../../assets/hireme.png';
import './HomPage.css';

const HomePage = () => {
  return (
    <section id='homepage' >
        <div className="homepageContent">
            <span className="hello">Hey human,</span>
            <span className="introText">I'm<span className="introName">Subash Eswaramoorthi</span> <br />A Junior Software Engineer Trainee </span>
            {/* <p className="introPara">Dedicated and hardworking professional with a strong work ethic <br /> and adaptability, committed to contributing to team success.</p> */}
            {/* <h2 className="introPara">Welcome to my site.</h2> */}
            <h2 className="introPara">Now, Come have a <span className='webSight' >Web-Sight</span></h2>
            <Link><button className="btn" disabled ><img src={btnImg} alt="" className='btnImg' />Hire me!</button></Link>
        </div>
        <img src={background} alt="Profile Image" className="bg" />
    </section>
  );
};
export default HomePage;