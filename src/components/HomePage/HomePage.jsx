import React from 'react';
import background from '../../assets/myimg3.png';
import { Link } from 'react-scroll';
import btnImg from '../../assets/hireme.png';
import './HomPage.css';

const HomePage = () => {
  return (
    <div id='homepage' >
        <div className="homepageContent">
            <span className="hello">Hey human,</span>
            <span className="introText">I'm<span className="introName">Subash Eswaramoorthi</span> <br />A Junior Software Engineer Trainee </span>
            {/* <p className="introPara1">Who is a, Dedicated and hardworking professional with a strong work ethic <br /> and adaptability, committed to contributing to team success.</p> */}
            <h2 className="introPara2">Now, Come have a <span className='webSight' >Web-Sight</span></h2>
            <Link><abbr title="Not Yet Fired"><button className="btn" disabled ><img src={btnImg} alt="" className='btnImg' />My Resume</button></abbr></Link>
        </div>
        <div className='bgImage' >
          <img src={background} alt="Profile Image" className="bg" />
        </div>
    </div>
  );
};
export default HomePage;