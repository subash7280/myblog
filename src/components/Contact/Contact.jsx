import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import FaceBookIcon from '../../assets/facebook-icon.png';
import InstaGramIcon from '../../assets/instagram.png';
import TwitterIcon from '../../assets/twitter.jpg';
import LinkedInIcon from '../../assets/linkedin.png';
import GitHubIcon from '../../assets/github.png';
import { toast } from 'react-toastify';
import './Contact.css';

const Contact = () => {
    const form = useRef();
    const [formData, setFormData] = useState({
        your_name: '',
        from_name: '',
        message: '',
    });

    const validateEmail = (from_name) => {
        const regex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
        return regex?.test(from_name);
    };

    // Handle input changes
    const onChange = (event) => {
        setFormData((prevState) => ({
            ...prevState,
            [event.target.name]: event?.target?.value,
        }));
    };

    const sendEmail = async (e) => {
        e?.preventDefault();

        const { your_name, from_name, message } = formData;
        let ifWrong = false;

        if (!your_name && !from_name && !message) {
            toast.error("Give the valid details.");
            return ifWrong = true;
        }
        else {
            if (!your_name) {
                toast.error("Name Is Required.");
                return ifWrong = true;
            }
            else if (your_name.length < 5) {
                toast.error("Name Should Be Minimum Of 5 Letters.");
                return ifWrong = true;
            }
            else if (!from_name) {
                toast.error("Email is required.");
                return ifWrong = true;
            }
            else if (!validateEmail(from_name)) {
                toast.error("Invalid Email Format.");
                return ifWrong = true;
            }
            else if (!message) {
                toast.error("Message is required.");
                return ifWrong = true;
            }
            else if (message.length < 10) {
                toast.error("Message Length Is Not Enough.");
                return ifWrong = true;
            };
        };

        if (!ifWrong) {
            try {
                const response = await emailjs.sendForm(
                    'service_nfrbso7',
                    'template_iibs2w9',
                    form.current,
                    'aDTigHfI0x66h_Nve'
                );
                // console.log("----->", response);

                if (response?.status === 200) {
                    toast.success("Mail Sent.");
                    e?.target?.reset();

                    setFormData({
                        your_name: '',
                        from_name: '',
                        message: '',
                    });
                }
                else {
                    toast.error("Mail did not sent.");
                };
            }
            catch (error) {
                toast.error("Mail did not sentttt.");
                // console.error("Error:", error);
            };
        };
    };

    return (
        <section className="contactPage">
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">I appreciate your swift response. Feel free to contact me.</span>

                <form action="" className="contactForm" ref={form} onSubmit={sendEmail} >
                    <input type="text" className="name" placeholder='Your Name' value={formData.your_name} name='your_name' onChange={onChange} />
                    <input type="text" className="email" placeholder='Your Email' value={formData.from_name} name='from_name' onChange={onChange} />
                    <textarea name='message' className="msg" rows="5" placeholder='Your Message' value={formData.message} onChange={onChange} ></textarea>
                    <button id='submitBtn' type='submit' value='Send' className="submitBtn" >Submit</button>
                </form>

                <div className="links">
                    <a href="https://m.facebook.com/profile.php/?id=100024948938075&name=xhp_nt__fb__action__open_user" target='blank' >
                        <img src={FaceBookIcon} alt="FaceBook" className="link" />
                    </a>
                    <a href="https://www.instagram.com/subash.eswaramoorthi/?igshid=NzZhOTFlYzFmZQ%3D%3D" target='blank' >
                        <img src={InstaGramIcon} alt="InstaGram" className="link" />
                    </a>
                    <a href="https://x.com/imsubash10?t=gLfvnC2hrvgWWjcdC5zKaw&s=08" target='blank' >
                        <img src={TwitterIcon} alt="Twitter" className="link" />
                    </a>
                    <a href="https://www.linkedin.com/in/subash-eswaramoorthi-49018927a" target='blank' >
                        <img src={LinkedInIcon} alt="LinkedIn" className="link" />
                    </a>
                    <a href="https://github.com/subash7280" target='blank' >
                        <img src={GitHubIcon} alt="GitHub" className="link" />
                    </a>
                </div>
            </div>
        </section>
    );
};
export default Contact;