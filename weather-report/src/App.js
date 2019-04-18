import React, { Component } from 'react';
import "./App.css";
import Navigationbar from './components/Navigationbar.js';


import Weather from './components/Weather'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigationbar/>
        <Weather/>

      </div>
    );
  }
}

export default App;
