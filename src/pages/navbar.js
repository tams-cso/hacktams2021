import React from 'react';

import './navbar.css';
import Logo from '../images/logo-2021.svg';

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar" id="navbar">
                <a className="nav-link logo" href="https://2021.hacktams.org/">
                    <img src={Logo} alt="logo" className="logoimg" />
                </a>
                <div className="navbar-container">
                    <a className="nav-link" href="/#about">
                        About
                    </a>
                    <a className="nav-link" href="/#speakers">
                        Speakers
                    </a>
                    <a className="nav-link" href="/#faq">
                        FAQ
                    </a>
                    <a className="nav-link" href="/#footer">
                        Contact Us
                    </a>
                    <a className="nav-link" href="/#sponsors">
                        Sponsors
                    </a>
                </div>
                <a className="logo filler" href="/#navbar">
                    <img src={Logo} alt="logo" className="logoimg" />
                </a>
            </div>
        );
    }
}

export default Navbar;
