import React from 'react';
import homeAutomation from '../../assets/home-automation.png';
import fireManagementSystem from '../../assets/fms.png';
import covid19 from '../../assets/covid19.png';
import gmailIcon from '../../assets/gmailIcon.png';
import './Extras.css';

const Extras = () => {

    return (
        <section id='works' >
            <h2 className="worksTitle">Projects</h2>
            <div className="worksImgs">
                <div className='work1' >
                    <div className='work1Desc' >
                        <b>HOME AUTOMATION SYSTEM</b> - This proposed sytem presents the overall design of Home Automation System (HAS) with low cost and wireless system. It specifically focuses on the development of an IoT based system, that is able to control various components via internet or be automatically programmed to operate from ambient conditions. Node MCU is used to execute the process of automation. This system is design to assist and provide support for the elderly or disabled people.
                    </div>
                    <div id='workImages' className='work1Img' >
                        <a href="" >
                            <img src={homeAutomation} alt="" className='worksImg' />
                        </a>
                    </div>
                </div>

                <div className='work2' >
                    <div id='workImages' className='work2Img' >
                        <a href="" >
                            <img src={fireManagementSystem} alt="" className='worksImg' />
                        </a>
                    </div>
                    <div className='work2Desc' >
                        <b>INDUSTRIAL SPECIFIC FIRE MANAGEMENT SYSTEM</b> - The project is designed with a low cost and all level users can have one for a safety purpose. This project seeks to design a fire alarm system that will continuously monitor the presence of significant amount of heat and activate an alarm, send a SMS) alert and extinguish the fire as a safety measure to contain the situation. IoT sensor nodes collect information from the Industry environment, such as smoke, air humidity, temperature then transmit collected data to IoT backhaul devices. It helps to operate the system from anywhere.
                    </div>
                </div>

                <div className='work3' >
                    <div className='work3Desc' >
                        <b>COVID 19 PREDICTION</b> - Machine Learning methods can play vital roles in identifying COVID-19 patients by visually analyzing their chest x-ray images. In this project, a new ML-method proposed to clarify the chest x-ray images into COvid and NON-COVID person. One of the main challenges in the pandemic crisis is to identify and monitor the patients efficiently. The CNN algorithm is used, that is designed for image recognition and classification tasks. It takes images as inputs, extracts and learns the features of the image, and lassifies them based on the learned features.
                    </div>
                    <div id='workImages' className='work3Img' >
                        <a href="" >
                            <img src={covid19} alt="" className='worksImg' />
                        </a>
                    </div>
                </div>

                <div className='work4' >
                    <div id='workImages' className='work4Img' >
                        <a href="" >
                            <img src={gmailIcon} alt="" id='gmailImage' className='worksImg' />
                        </a>
                    </div>
                    <div className='work4Desc' >
                        {/* <b>GMAIL APP</b> - This web application uses Node.js and Express.js as backend, Next.js for frontend, Redux for state - management and MongoDB for storing of the user's and email details. This web application is found to be very simple to use. A user need's to register and can be able to send Mail to other user's. Also, the user's can be able to view their inbox mails from other user's. Similiarly, the user's can be able to view the sent mails, from them in Sent Mails. They can update their profile and may delete thier profile if needed. The user's can be able to login themselves again and they can hava their data still there. */}
                        <b>GMAIL APP</b> - This web application uses Node.js and Express.js as backend, Next.js for frontend, Redux for state - management and MongoDB for storing of the user's and email details. This web application is found to be very simple to use. A user need's to register and can be able to send Mail to other user's. Also, the user's can be able to view their inbox mails from other user's. Similiarly, the user's can be able to view the sent mails, from them in Sent Mails. They can update their profile and may delete thier profile if needed.
                    </div>
                </div>
            </div>
            {/* <abbr title="Under working phase"><button disabled className="seeMoreBtn">See More</button></abbr> */}
        </section>
    );
};
export default Extras;