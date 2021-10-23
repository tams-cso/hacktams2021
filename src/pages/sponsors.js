import React from 'react';
/*import Default from '../images/raw.png';*/
import data from '../data/sponsorData.json';
import './sponsors.css';

const imageDB = 'https://hacktams-backend.s3.us-east-2.amazonaws.com';

class Sponsors extends React.Component {
    createSponsors = () => {
        const sponsorList = [];
        data.forEach((sponsor) => {
            sponsorList.push(
                <img
                    src={`${imageDB}/sponsors/fall2021/${sponsor.img}`}
                    className={`sponsor${sponsor.tier === 1 ? ' tier1' : ''}`}
                    alt={sponsor.name}
                    onClick={() => {
                        window.open(sponsor.link, '_blank');
                    }}
                />
            );
            console.log(`${imageDB}/sponsors/fall2021/${sponsor.img}`);
        });
        return sponsorList;
    };

    render() {
        const sponsors = this.createSponsors();
        return (
            <div className="sponsors" id="sponsors">
                <h1>Our Sponsors</h1>
                <div className="sponsors-list">{sponsors}</div>
            </div>
        );
    }
}

export default Sponsors;
