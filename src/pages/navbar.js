import React from 'react';

import './navbar.css';

class Navbar extends React.Component {
    openSite = (site) => {
        if (site !== '') window.open(site);
    };

    render() {
        return (
            <div className="navbar" ref={this.props.reference}>
                <div className="item">
                    <a href="/#about">
                        about
                    </a>
                </div>
                <div className="item">
                    <a href="/#speakers">
                        speakers
                    </a>
                </div>
                <div className="item">
                    <a href="/#faq">
                        FAQ
                    </a>
                </div>
                <div className="item">
                    <a href="/#sponsors">
                        sponsors
                    </a>
                </div>
                <div className="item">
                    <a href="/#footer">
                        Contact
                    </a>
                </div>
            </div>
        );
    }
}

export default Navbar;
