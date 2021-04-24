import React from 'react';
import Home from './components/home';
import About from './components/about';
import FAQ from './components/faq';
import Sponsors from './components/sponsors';
import Footer from './components/footer';
import './app.css';

import { ReactComponent as Duck } from './images/logo-2021.svg';
import Speakers from './components/speakers';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.home = React.createRef();
        this.about = React.createRef();
        this.faq = React.createRef();
        this.sponsors = React.createRef();
        this.footer = React.createRef();
    }
    render() {
        return (
            <div className="app">
                <Duck className="logo"></Duck>
                <Home reference={this.home} />
                <About reference={this.about} />
                <Speakers />
                <FAQ reference={this.faq} />
                <Sponsors reference={this.sponsors} />
                <Footer reference={this.contact} />
            </div>
        );
    }
}

export default App;
