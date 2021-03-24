import React from 'react';
import './app.css';

import { ReactComponent as Duck } from './images/logo-2021.svg';

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Duck className="logo"></Duck>
            </div>
        );
    }
}

export default App;
