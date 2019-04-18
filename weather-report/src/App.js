import React, { Component } from 'react';

import Navigationbar from './components/Navigationbar.js';


import Weather from './components/Weather'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigationbar/>
        <Weather/>
        <div className = "panel"></div>
        <p> Weather report is below </p>
      </div>
    );
  }
}

export default App;
