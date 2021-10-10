import React from 'react';
import './speaker.css';

class Speaker extends React.Component {
    render() {
        return (
            <div className="speaker">
                <img src={this.props.info.img} onClick={() => this.props.setActiveSpeaker(this.props.info)} />
            </div>
        );
    }
}

export default Speaker;
