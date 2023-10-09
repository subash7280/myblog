import React, { useState } from 'react';
import {Link} from 'react-scroll';
import logo from '../../assets/logo13.png';
// import contactImage from '../../assets/contact.png';
import Menu from '../../assets/menu.png';
import './NavigationBar.css';

const NavigationBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
      <div className="navbar">
        <div className="logoDiv">
          <img src={logo} alt="Logo img"  className='logo' />
        </div>
        <div className="desktopMenu">
            <Link activeClass='active' to='homepage' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
            <Link activeClass='active' to='about' spy={true} smooth={true} offset={-40} duration={500} className="desktopMenuListItem">About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-60} duration={500} className="desktopMenuListItem">Extras</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-60} duration={500} className="desktopMenuListItem">Skills</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-155} duration={500} className="desktopMenuListItem">Contact</Link>
        </div>
        
        <img src={Menu} alt="Menu"  className='mobMenu' onClick={() => setShowMenu(!showMenu)} />
        <div className="navMenu" style={{display : showMenu ? 'flex' : 'none'}}>
            <Link activeClass='active' to='homepage' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)} >Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={40} duration={500} className="listItem" onClick={() => setShowMenu(false)} >About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={10} duration={500} className="listItem" onClick={() => setShowMenu(false)} >Extras</Link>
            {/* <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)} >Skills</Link> */}
            <Link className="listItem" onClick={() => setShowMenu(false)} >Skills</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={20} duration={500} className="listItem" onClick={() => setShowMenu(false)} >Contact</Link>
        </div>
      </div>
  );
};
export default NavigationBar;