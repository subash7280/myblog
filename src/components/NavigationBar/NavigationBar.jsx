import React, { useState } from 'react';
import {Link} from 'react-scroll';
// import logo from '../../assets/logo.png';
// import logo from '../../assets/logo3.png';
// import logo from '../../assets/logo7.png';
import logo from '../../assets/logo9.png';
// import contactImage from '../../assets/contact.png';
import Menu from '../../assets/menu.png';
import './NavigationBar.css';

const NavigationBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  // const gotoContact = () => {
  //   document.getElementById('contact').scrollIntoView({behavior : 'smooth'});
  // };

  return (
    <div>
      <nav className="navbar">
        <img src={logo} alt="Logo img"  className='logo' />
        <div className="desktopMenu">
            <Link activeClass='active' to='homepage' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-30} duration={500} className="desktopMenuListItem">About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-60} duration={500} className="desktopMenuListItem">Extras</Link>
            {/* <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Skills</Link> */}
            <Link className="desktopMenuListItem">Skills</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-155} duration={500} className="desktopMenuListItem">Contact</Link>
        </div>

        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-155} duration={500} className="desktopMenuBtn">Contact</Link>
        {/* <Link><button className="desktopMenuBtn" to='homepage' smooth={true} offset={-100} duration={500} >
          <img src={contactImage} alt="" className="desktopMenuImg" />Ping Me
        </button></Link> */}
        
        <img src={Menu} alt="Menu"  className='mobMenu' onClick={() => setShowMenu(!showMenu)} />
        <div className="navMenu" style={{display : showMenu ? 'flex' : 'none'}}>
            <Link activeClass='active' to='homepage' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)} >Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={40} duration={500} className="listItem" onClick={() => setShowMenu(false)} >About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={10} duration={500} className="listItem" onClick={() => setShowMenu(false)} >Extras</Link>
            {/* <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)} >Skills</Link> */}
            <Link className="listItem" onClick={() => setShowMenu(false)} >Skills</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={20} duration={500} className="listItem" onClick={() => setShowMenu(false)} >Contact</Link>
        </div>
      </nav>
    </div>
  );
};
export default NavigationBar;