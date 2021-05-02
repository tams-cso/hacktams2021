import React from 'react';
import Home from './pages/home';
import About from './pages/about';
import Speakers from './pages/speakers';
import FAQ from './pages/faq';
import Sponsors from './pages/sponsors';
import Footer from './pages/footer';
import './app.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.home = React.createRef();
        this.about = React.createRef();
        this.speakers = React.createRef();
        this.faq = React.createRef();
        this.sponsors = React.createRef();
        this.footer = React.createRef();
    }
    render() {
        return (
            <div className="app">
                <Home reference={this.home} />
                <About reference={this.about} />
                <Speakers reference={this.speakers} />
                <FAQ reference={this.faq} />
                <Sponsors reference={this.sponsors} />
                <Footer reference={this.contact} />
            </div>
        );
    }
}

export default App;
