import React from 'react';
import Details from './Details.js'
import './Weather.css'
import PropTypes from 'prop-types';

const APIKEY = "94147b45f9141cb471aa99afaba96549";

class Weather extends React.Component {
    constructor(props) {
        super(props);
        Weather.defaultProps={
            city: 'chandigarh',
            country: 'IN'
        };
    }
    state = {
        details: undefined,
        error: undefined,
    };

    componentDidMount() {
        this.getWeather();
      }

    getWeather = async () => {
        const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${this.props.city},${this.props.country}&APPID=${APIKEY}`);
        const data = await apiCall.json();

        for (let i = 0; i < data.list.length; i += 8) {
            this.changeState(data);
            console.log(data.list[0].main);
        }
 //       console.log(`weather from getWeather ${this.state.city}`)
    }
    changeState(data) {
        console.log('value of props $()' + this.props.city);
        this.setState({
            details: data.list.map(item => ({
                humidity: item.main.humidity,
                temp: item.main.temp,
                weather: item.weather[0],
            })),

            error: undefined,
        });
        this.renderForeCast();
    }
    renderForeCast() {
        const { details } = this.state;
 //       console.log('value of props $()' + this.props.city);
        return details.map(element => (
            <Details
                key={element.dt}
                date={element.dt}
                temp={element.temp}
                weather={element.weather}
                humidity={element.humidity}
            />
        ));
    

    }

    // componentWillMount = async () => {

    //     const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=bangalore,IN&APPID=${APIKEY}`);
    //     const dataJson = await api_call.json();
    //     for (let i = 0; i < dataJson.list.length; i += 8) {
    //         this.changeState = dataJson;
    //     }
    //     console.log(`${this.state.data} is the data`);
    // }

    render() {
        let forecastComponent;
        let { details } = this.state;
        let { error } = this.state
        if(details){
            forecastComponent = this.renderForeCast;
        }
        return (
            details === undefined ? (
                
                <div className="loading"> 
                <p>error va </p>
                    {error &&(
                        <p> error in retreving data, please try again later</p>
                    )}
                    {<div className="spinner"> </div>}
                 </div>
            ):(<div>
                <div className="weather-details col-md-12">
                    <div className="weather-details_Card col-md-10">
                        {forecastComponent}
                        <p> hey </p>
                    </div>
                </div>
            </div>
        ))
    }

}
export default Weather;