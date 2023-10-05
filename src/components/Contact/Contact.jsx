import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import FaceBookIcon from '../../assets/facebook-icon.png';
import InstaGramIcon from '../../assets/instagram.png';
import TwitterIcon from '../../assets/twitter.png';
import LinkedInIcon from '../../assets/linkedin.png';
import GitHubIcon from '../../assets/youtube.png';
import './Contact.css';

const Contact = () => {
    const form = useRef();

    const sendEmail = async (e) => {
        e.preventDefault();
    
        const response = await 
            emailjs.sendForm('service_nfrbso7', 'template_iibs2w9', form.current, 'aDTigHfI0x66h_Nve')
                .then((result) => {
                    console.log(result);
                    e.target.reset();
                    return result;
                }, (error) => {
                    console.log(error.text);
                });
        //! response :-
        // status: 200
        // text: "OK"
        if(response.status === 200) {
            // window.location.reload(true);
        };
    };

    return (
        <section className="contactPage">
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">I appreciate your swift response. Feel free to contact me.</span>
                <form action="" className="contactForm" ref={form} onSubmit={sendEmail} >
                    <input type="text" className="name" placeholder='Your Name' name='your_name' />
                    <input type="email" className="email" placeholder='Your Email' name='from_name' />
                    <textarea name="message" className="msg" rows="5" placeholder='Your Message'></textarea>
                    <button type='submit' value='Send' className="submitBtn">Submit</button>
                </form>
                <div className="links">
                    <a href="" target='blank' >
                        <img src={FaceBookIcon} alt="FaceBook" className="link" />
                    </a>
                    <a href="" target='blank' >
                        <img src={InstaGramIcon} alt="InstaGram" className="link" />
                    </a>
                    <a href="" target='blank' >
                        <img src={TwitterIcon} alt="Twitter" className="link" />
                    </a>
                    <a href="" target='blank' >
                        <img src={LinkedInIcon} alt="LinkedIn" className="link" />
                    </a>
                    <a href="" target='blank' >
                        <img src={GitHubIcon} alt="GitHub" className="link" />
                    </a>
                </div>
            </div>
        </section>
    );
};
export default Contact;