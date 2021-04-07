import React from 'react';
import Sponsors from './components/sponsors';
import './app.css';

import { ReactComponent as Duck } from './images/logo-2021.svg';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.sponsors = React.createRef();
    }
    render() {
        return (
            <div className="app">
                <Duck className="logo"></Duck>
                <div className="more"></div>
                <Sponsors reference={this.sponsors} />
                <div className="more"></div>
                <div className="more"></div>
            </div>
        );
    }
}

export default App;
