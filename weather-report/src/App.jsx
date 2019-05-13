import React from 'react';

import Title from './components/Title';
import Weather from './components/Weather';
import Form from './components/Form';


function App() {
  return (
    <div className="wrapper">
      <div className="main container">
        <div className="row fullscreen">
          <div className="col-md-5 title-container">
            <Title />
          </div>
          <div className="col-md-7 content-container">
            <div className="row">
              <Form />
            </div>
            <div className="row">
              <Weather />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
