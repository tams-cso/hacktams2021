import React from 'react';
import faqs from './faq.json';
import FAQBox from './faq-box';
import './faq.css';

class FAQ extends React.Component {
    constructor(props) {
        super(props);
        this.state = { dropdown: false, toggle: 'left' };
    }

    toggleDropdown = () => {
        this.setState({ dropdown: !this.state.dropdown });
    };

    changeSwitch = (dir) => {
        this.setState({ toggle: dir });
    };

    render() {
        return (
            <div className="event">
                <img
                    className="event-header"
                    alt={`${this.props.year} header`}
                    src={`${imageDb}/${this.props.year}.png`}
                    onClick={this.toggleDropdown}
                ></img>
                <div className={`event-dropdown ${this.state.dropdown ? 'active' : ''}`}>
                    <p className="event-dropdown-info">{info}</p>
                    <div className="event-dropdown-button-container">
                        <div className="event-dropdown-switch-container">
                            <div className={`event-dropdown-switch-back ${this.state.toggle}`}></div>
                        </div>
                    </div>
                    <div className={`event-dropdown-section organizers ${this.state.toggle}`}>
                        <div className="event-organizers-list">{organizersList}</div>
                    </div>
                    <div className={`event-dropdown-section sponsors ${this.state.toggle}`}>
                        <div className="event-sponsors">Sponsors WIP</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FAQ;