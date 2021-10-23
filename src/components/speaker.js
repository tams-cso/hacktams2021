import React from 'react';
import './speaker.css';

const imageDB = 'https://hacktams-backend.s3.us-east-2.amazonaws.com';

class Speaker extends React.Component {
    render() {
        return (
            <div className="speaker">
                <img
                    src={`${imageDB}/people/speakers/${this.props.info.img}`}
                    alt={this.props.info.name}
                    onClick={() => this.props.setActiveSpeaker(this.props.info)}
                />
            </div>
        );
    }
}

export default Speaker;
