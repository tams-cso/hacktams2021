import React from 'react';
import { ReactComponent as Left } from '../images/website-top-left.svg';
import { ReactComponent as Right } from '../images/website-top-right.svg';
import './home.css';

class Home extends React.Component {
    submit = () => {
        const link = 'https://forms.gle/VY6Nu5VHpw4F89Ki6';
        window.open(link, '_blank');
    };

    render() {
        return (
            <div className="home" id="home" >
                <div className="home-container">
                    <h1 className="home-title">hackTAMS</h1>
                    <h1 className="home-title">Fall 2021</h1>
                    <div className="home-register" onClick={this.submit}>
                        Register Now
                    </div>
                </div>
                <Left alt="left-building" className="home-building left-building" />
                <Right alt="right-building" className="home-building right-building" />
            </div>
        );
    }
}

export default Home;
