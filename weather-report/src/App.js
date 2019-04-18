import React, { Component } from 'react';

import Navigationbar from './components/Navigationbar.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigationbar/>
        <p> Weather report is below </p>
      </div>
    );
  }
}

export default App;
