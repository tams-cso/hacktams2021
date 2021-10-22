import React from 'react';

import './navbar.css';
import Logo from '../images/logo-2021.svg';

class Navbar extends React.Component {
    openSite = (site) => {
        if (site !== '') window.open(site);
    };

    render() {
        return (
            <div className="navbar" id="navbar">
                <header>
                    <a className="logo" href='/#navbar'>
                        <img src={Logo} alt="logo" className="logoimg" />
                    </a>
                    <nav>
                        <ul className="nav__links">
                            <li>
                                <a className="nav-link" href="/#about">About</a>
                            </li>
                            <li>
                                <a className="nav-link" href="/#speakers">Speakers</a>
                            </li>
                            <li>
                                <a className="nav-link" href="/#faq">FAQ</a>
                            </li>
                            <li>
                                <a className="nav-link" href="/#footer">Contact Us</a>
                            </li>
                            {/* <li><a href="/#sponsors">Sponsors</a></li> */}
                        </ul>
                    </nav>
                    <a className="nav-hide" href="/#navbar">nothing</a>
                </header>
            </div>
        );
    }
}

export default Navbar;
