import React from 'react';
import homeAutomation from '../../assets/home-automation.png';
import fireManagementSystem from '../../assets/fms.png';
import covid19 from '../../assets/covid19.png';
import './Extras.css';

const Extras = () => {

    return (
        <section id='works' >
            <h2 className="worksTitle">Campus Projects</h2>
            <div className="worksImgs">
                <div className='work1' >
                    <div className='work1Desc' >
                        HOME AUTOMATION SYSTEM - amet consectetur adipisicing elit. Commodi impedit voluptas delectus alias, ab nesciunt similique earum! Totam, inventore natus, repellat odio necessitatibus quisquam nesciunt debitis mollitia minima sunt quam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi impedit voluptas delectus alias, ab nesciunt similique earum! Totam, inventore natus, repellat odio necessitatibus quisquam nesciunt debitis mollitia minima sunt quam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi impedit voluptas.
                    </div>
                    <div id='workImages' className='work1Img' >
                        <img src={homeAutomation} alt="" className='worksImg' />
                    </div>
                </div>

                <div className='work2' >
                    <div id='workImages' className='work2Img' >
                        <img src={fireManagementSystem} alt="" className='worksImg' />
                    </div>
                    <div className='work2Desc' >
                        INDUSTRIAL SPECIFIC FIRE MANAGEMENT SYSTEM - The project is designed with a low cost and all level users can have one for a safety purpose. This project seeks to design a fire alarm system that will continuously monitor the presence of significant amount of heat and activate an alarm, send a SMS) alert and extinguish the fire as a safety measure to contain the situation. IoT sensor nodes collect information from the Industry environment, such as smoke, air humidity, temperature then transmit collected data to IoT backhaul devices. It helps to operate the system from anywhere.
                    </div>
                </div>

                <div className='work3' >
                    <div className='work3Desc' >
                        COVID 19 PREDICTION - amet consectetur adipisicing elit. Commodi impedit voluptas delectus alias, ab nesciunt similique earum! Totam, inventore natus, repellat odio necessitatibus quisquam nesciunt debitis mollitia minima sunt quam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi impedit voluptas delectus alias, ab nesciunt similique earum! Totam, inventore natus, repellat odio necessitatibus quisquam nesciunt debitis mollitia minima sunt quam.  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi impedit voluptas.
                    </div>
                    <div id='workImages' className='work3Img' >
                        <img src={covid19} alt="" className='worksImg' />
                    </div>
                </div>
            </div>
            <abbr title="Under working phase"><button disabled className="seeMoreBtn">See More</button></abbr>
        </section>
    );
};
export default Extras;