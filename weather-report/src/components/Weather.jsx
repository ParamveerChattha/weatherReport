import React, { Component } from 'react';
import moment from 'moment';
import Details from './Details';

const API_KEY = 'c4accfd5c8be7c628489bfa23554f59b';
class Weather extends Component {
  state = {
    details: undefined,
    error: undefined,
  };
  componentDidMount() {
    this.getWeatherForecast();
  }

    getWeatherForecast = async () => {
      const city = 'Bengaluru';
      const country = 'IN';
      const apiCall = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}&units=metric`);
      const data = await apiCall.json();
      this.changeState(data);
    }

    changeState(data) {
      this.setState({
        details: data.list.map(item => ({
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
Error in getting data, try again later.
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
