import React from 'react';
import Speaker from './speaker';
import './speakers.css';

class Speakers extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    createSpeakers = () => {
        return <Speaker />;
    };

    render() {
        return (
            <div className="speakers">
                <h2>Speakers</h2> 
                <div className="speakers-menu"></div>
                <div className="speakers-display">
                    <div className="speakers-screen"></div>
                </div>
            </div>
        );
    }
}

export default Speakers;
