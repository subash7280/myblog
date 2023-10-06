import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import FaceBookIcon from '../../assets/facebook-icon.png';
import InstaGramIcon from '../../assets/instagram.png';
import TwitterIcon from '../../assets/twitter.png';
import LinkedInIcon from '../../assets/linkedin.png';
import GitHubIcon from '../../assets/github.png';
import { toast } from 'react-toastify';
import './Contact.css';

const Contact = () => {
    const form = useRef();
    const [formData, setFormData] = useState({
        your_name : '',
        from_name : '',
        message : '',
    });
    // console.log(formData);
    const [formSubmitted, setFormSubmitted] = useState(false);

    // Handle input changes
    const onChange = (event) => {
        setFormData((prevState) => ({
            ...prevState,
            [event.target.name] : event.target.value,
        }));
    };

    const sendEmail = async (e) => {
        e.preventDefault();
        const { your_name, from_name, message } = formData;
        let ifWrong = false;

        if(!your_name && !from_name && !message) {
            toast.error("Give the valid details.");
        }
        else {
            if(!your_name) {
                toast.error("Name Is Required.");
            }
            else if(your_name.length < 5) {
                toast.error("Invalid Name.");
            }
            else if(!from_name) {
                toast.error("Email is required.");
            }
            else if(!validateEmail(from_name)) {
                toast.error("Invalid Email Format.");
            }
            else if(!message) {
                toast.error("Message is required.");
            }
            else if(message.length < 10) {
                toast.error("Message Length Is Not Enough.");
            };
        };

        if(ifWrong) {
            const submitBtn = document.getElementById('submitBtn');
            submitBtn.style.cursor = 'none';
        };

        try {
            const response = await emailjs.sendForm(
                'service_nfrbso7',
                'template_iibs2w9',
                form.current,
                'aDTigHfI0x66h_Nve'
            );

            if (response.status === 200) {
                toast.success("Mail Sent Successfully.");
                e.target.reset();
                // setFormSubmitted(true);
            }
            else {
                toast.error("Mail did not sent.");
            };
        }
        catch (error) {
            toast.error("Mail did not sentttt.");
            console.error("Error:", error);
        };
    
        // const response = await 
        //     emailjs.sendForm('service_nfrbso7', 'template_iibs2w9', form.current, 'aDTigHfI0x66h_Nve')
        //         .then((result) => {
        //             console.log("---->",result);
        //             e.target.reset();
        //             return result;
        //         }, (error) => {
        //             toast.error("Mail didot sent.");
        //             console.log("error",error);
        //             console.log("error.text",error.text);
        //         });
        //! response :-
        // status: 200
        // text: "OK"
        // if(response.status === 200) {
        //     // toast.success("Mail Sent Successfully.");
        //     // window.location.reload(true);
        // };
    };

    const validateEmail = (from_name) => {
        const regex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
        return regex.test(from_name);
    };

    return (
        <section className="contactPage">
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">I appreciate your swift response. Feel free to contact me.</span>
                
                <form action="" className="contactForm" ref={form} onSubmit={sendEmail} >
                    <input type="text" className="name" placeholder='Your Name' value={formData.your_name} name='your_name' onChange={onChange}  />
                    <input type="text" className="email" placeholder='Your Email' value={formData.from_name} name='from_name' onChange={onChange} />
                    <textarea name='message' className="msg" rows="5" placeholder='Your Message' value={formData.message} onChange={onChange} ></textarea>
                    <button id='submitBtn' type='submit' value='Send' className="submitBtn" >Submit</button>
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