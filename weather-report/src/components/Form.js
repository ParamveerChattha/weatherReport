import React from 'react';

const Form = ()=>(
  
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <h2 id="city">
city:                
                </h2>
                <input id="city-value" placeholder = "city.." defaultValue = "Chandigarh" type = "text" readOnly/>
            </div>
            <div className="col-md-6">
            <h2 id = "country"> country:    </h2>
            <input id= "country-value" placeholder= "country.." defaultValue="IN" type ="text" readOnly/>
            </div>
        </div>
    </div>

);
export default Form;