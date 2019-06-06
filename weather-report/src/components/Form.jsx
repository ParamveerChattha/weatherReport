import React from 'react';
import Weather from './Weather'
class Form extends React.Component {
  state = {
    city: 'Chandigarh',
    country: 'IN',
    submit: false,
    finalCity: 'Chandigarh',
    finalCountry: 'IN'
    
  }

  handleCity = (event) => {
    event.preventDefault();
    this.setState({ city: event.target.value });
  }
  handleCountry = (event) => {
    event.preventDefault();
    this.setState({ country: event.target.value });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ submit: true });
    this.updateState(this.state.city, this.state.country);
    
  }
  updateState = (city, country) => {
    console.log(city + ' ' + country + 'updateState');
    this.setState({
      finalCity: city,
      finalCountry: country,
      submit: false
    });
  }

  render() {
    return (
      <div>

        <div className="container-fluid form">
          <div className="row">
            <div className="col-xs-5 well">
              <h2 id="city" className="content-container__heading">
                City:
        </h2>
              <input className="form-control" id="city-value well" type="input" defaultValue="Chandigarh" name="city" placeholder="City" onChange={this.handleCity} />
            </div>
            <div className="col-xs-5 well">
              <h2 id="country" className="content-container__heading">
                Country:
        </h2>
              <input className="form-control" id="country-value" type="input" defaultValue="IN" name="country" placeholder="Country" onChange={this.handleCountry} />
            </div>
            <div className="col-xs-2 well">
              <br />
              <button type="button" className="btn btn-block btn-primary" onClick={this.handleSubmit} >Submit</button>
            </div>
          </div>
        </div>

        <Weather city={this.state.finalCity} country={this.state.finalCountry} />
      </div>
    );
  }
}
export default Form;
