import React, { Component } from 'react';
import "./App.css";
import Form from "./components/Form";
import Navigationbar from './components/Navigationbar.js';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigationbar/>
        <div className="row">
          <div className="col-md-7 title-container">
          </div>
          <div className="col-md-5 content-container">
          <Form/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
