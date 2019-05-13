import React from 'react';

const Form = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-xs-6 well">
        <h2 id="city" className="content-container__heading">
City:
        </h2>
        <input id="city-value well" type="input" defaultValue="Bengaluru" name="city" placeholder="City..." readOnly />
      </div>
      <div className="col-xs-6 well">
        <h2 id="country" className="content-container__heading">
Country:
        </h2>
        <input id="country-value" type="input" defaultValue="IN" name="country" placeholder="Country..." readOnly />
      </div>
    </div>
  </div>
);

export default Form;
