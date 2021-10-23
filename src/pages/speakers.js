import React from 'react';
import Speaker from '../components/speaker';
import data from '../data/speakerData.json';
import Side from '../images/hologram-side-02.svg';
import Base from '../images/hologram-base.svg';
import Frame from '../images/hologram-frame.svg';
import './speakers.css';

class Speakers extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeSpeakerInfo: { name: '', img: '', desc: '' },
        };
    }

    createSpeakers = () => {
        const speakerList = [];
        data.forEach((speaker) => {
            speakerList.push(<Speaker key={speaker.name} info={speaker} setActiveSpeaker={this.setActiveSpeaker} />);
        });
        return speakerList;
    };

    setActiveSpeaker = (info) => {
        this.setState({ activeSpeakerInfo: info });
    };

    render() {
        const speakers = this.createSpeakers();

        return (
            <div className="speakers" id="speakers">
                <h1>Speakers</h1>
                {/* <p>
                    Coming soon! Please email <a href="mailto: team@hacktams.org">team@hacktams.org</a> if you are
                    interested in speaking at our event!
                </p> */}
                <div className="speakers-container">
                    <div className="speakers-display">
                        <div className="speakers-menu">{speakers}</div>
                        <img src={Side} alt="speakers" className="side"></img>
                    </div>
                    <div className="speakers-screen">
                        <div className="speakers-info">
                            <h4>{this.state.activeSpeakerInfo.name}</h4>
                            <p className="speaker-desc">{this.state.activeSpeakerInfo.desc}</p>
                        </div>
                        <img src={Frame} alt="speaker frame" className="display"></img>
                        <img src={Base} alt="base" className="display"></img>
                    </div>
                </div>
            </div>
        );
    }
}

export default Speakers;
