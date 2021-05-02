import React from 'react';
<<<<<<< HEAD
import Home from './components/home';
import FAQ from './components/faq';
/*import Sponsors from './components/sponsors';*/
import Footer from './components/footer';
=======
import Home from './pages/home';
import About from './pages/about';
import Speakers from './pages/speakers';
import FAQ from './pages/faq';
import Sponsors from './pages/sponsors';
import Footer from './pages/footer';
>>>>>>> 0e676751c4b5c0a20e32a24c9c7fbc35adfc0756
import './app.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.home = React.createRef();
<<<<<<< HEAD
        this.faq = React.createRef();
        /*this.sponsors = React.createRef();*/
=======
        this.about = React.createRef();
        this.speakers = React.createRef();
        this.faq = React.createRef();
        this.sponsors = React.createRef();
>>>>>>> 0e676751c4b5c0a20e32a24c9c7fbc35adfc0756
        this.footer = React.createRef();
    }
    render() {
        return (
            <div className="app">
                <Home reference={this.home} />
<<<<<<< HEAD
                <FAQ reference={this.faq} />
                {/*<Sponsors reference={this.sponsors} />*/}
                <Speakers />
=======
                <About reference={this.about} />
                <Speakers reference={this.speakers} />
                <FAQ reference={this.faq} />
                <Sponsors reference={this.sponsors} />
>>>>>>> 0e676751c4b5c0a20e32a24c9c7fbc35adfc0756
                <Footer reference={this.contact} />
            </div>
        );
    }
}

export default App;
