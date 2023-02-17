import React from "react";
import Logo from '../assets/logo.svg';
import './Navbar.css';
import { useState } from "react";
import { Fade } from "react-awesome-reveal";

const Navbar = () => {

    const [btnState, setBtnState] = useState(false);

    const handleClick = () => {
        setBtnState(btnState => !btnState);
    }

    let toggleClassCheck = btnState ? ' active' : null;
    let navClassCheck = btnState ? ' nav-margin' : null;

    return (
        <>
            <Fade direction="down" triggerOnce="true">
                <nav className= {navClassCheck}>
                    <img src={Logo} alt="The logo." className="logo-img" />
                    <div className="group">
                        <ul className= {`navigation ${toggleClassCheck}`}>
                            <li><a href="index.html">About</a></li>
                            <li><a href="projects.html">Projects</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </div>
                    <div className={`hamburger ${toggleClassCheck}`} onClick={handleClick}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                </nav>
            </Fade>
        </>
    );
}

export default Navbar;