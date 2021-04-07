import React from 'react';
import Vault from '../images/vault.png';
import Door from '../images/doors.svg';
import Default from '../images/raw.png';
import './sponsors.css';

class Sponsors extends React.Component {
    constructor(props) {
        super(props);
        this.state = { inView: false };
        this.toAnimate = React.createRef();
    }
    handleScroll = () => {
        const scrollTop = window.scrollY;
        const scrollBottom = scrollTop + window.innerHeight;
        const elementTop = this.toAnimate.current.offsetTop;
        const elementBottom = elementTop + this.toAnimate.current.clientHeight;
        const inView = scrollBottom > elementTop && !(scrollTop > elementBottom);
        this.setState({ inView });
    };
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll, true);
    }
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }
    render() {
        const animate = this.state.inView ? "animate" : "";
        return (
            <section className={`sponsors__wrapper ${animate}`} ref={this.toAnimate} >
                <div className={`sponsors__panel sponsors__panel-left ${animate}`} ref={this.toAnimate}>
                </div>

                <div className={`sponsors__images ${animate}`} ref={this.toAnimate}>
                    <h>Sponsors</h>
                    <br></br>
                    <img src={Default} alt="Default" />
                </div>

                <div className={`sponsors__panel sponsors__panel-right ${animate}`} ref={this.toAnimate}>
                    <div className={`vault rotate ${animate}`} ref={this.toAnimate}>
                        <img src={Vault} alt="Vault" />
                    </div>
                </div>
            </section>
        );
    }
}

export default Sponsors;