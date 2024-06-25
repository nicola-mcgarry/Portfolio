import React, { useState } from 'react';
import Logo from '../../assets/NMLogo.png'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return(
        <div className="container-fluid sticky-top navbar-inverse g-0">
            {/* <div className="text-center pt-1"><p>Available for work</p></div> */}
            <nav id="header" className="navbar d-flex align-items-center ps-5 pe-5">
            <img src={Logo} alt="logo"/>
            <ul className="nav-links-desk d-flex gap-4 pt-2 align-content-end align-items-center">
                <li >
                    <a  href="#about">About</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a type="button" href="#contact" className="btn btn-primary contact">Contact</a>
                </li>
            </ul>
        
        </nav>
        <div className="box"></div>
        </div>
        
    );
};

export default Header;