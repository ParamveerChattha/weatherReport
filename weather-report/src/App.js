import React, { Component } from 'react';
import "./App.css";
import Form from "./components/Form";
import Navigationbar from './components/Navigationbar.js';


import Weather from './components/Weather'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigationbar/>
        <div className="row">
        <Form/>
        </div>
        
        <Weather/>

      </div>
    );
  }
}

export default App;
