import React, { Component } from 'react';
import moment from 'moment';
import Details from './Details';
import form from './Form';
const API_KEY = 'c4accfd5c8be7c628489bfa23554f59b';
class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: undefined,
      error: undefined,
      city: 'Bengaluru',
      country: 'IN',
    }
  }

  componentDidMount() {
    this.getWeatherForecast();
    this.setState({
      city: this.props.city,
      country: this.props.country
    });
  }

  getWeatherForecast = async () => {
    const apiCall = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${this.state.city},${this.state.country}&appid=${API_KEY}&units=metric`);

    const data = await apiCall.json();

    let tempData = [];
    for (let i = 0; i < data.list.length; i += 8) {
      tempData.push(data.list[i]);
    }
    const tempObj = Object.assign({}, tempData);
    const tempObjJson = JSON.stringify(tempData);
    console.log(tempData);
    this.changeState(tempData);
  }

  changeState(data) {
    this.setState({
      details: data.map(item => ({
        date: moment(item.dt * 1000),
        temp: item.main.temp,
        humidity: item.main.humidity,
        weather: item.weather[0],
      })),
      error: undefined,
    });
    this.renderForeCast();
  }

  renderForeCast() {
    const { details } = this.state;
    return details.map(element => (
      <Details
        key={element.date}
        date={element.date}
        temp={element.temp}
        humidity={element.humidity}
        weather={element.weather}
      />
    ));
  }


  render() {
    let forecastComponent;
    const { details } = this.state;
    const { error } = this.state;
    if (details) {
      forecastComponent = this.renderForeCast();
    }

    return (

      details === undefined ? (
        <div className="loading">
          {error && (
            <p>
              Error in retrieving data, try again later.
            </p>
          )}
          {<div className="spinner" />}
        </div>
      ) : (
          <div className="weather-details col-md-12">
            <div className="weather-details__card col-md-10">
              {forecastComponent}
            </div>
          </div>)

    );
  }
}


export default Weather;
