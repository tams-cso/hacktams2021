import React from 'react';
import './speakers.css';

class Speaker extends React.Component {
    render() {
        return (
            <div className="speaker">
                <img className="speaker-img" alt="speaker-img" />
                <p className="speaker-name">{this.props}</p>
            </div>
        );
    }
}

export default Speaker;
