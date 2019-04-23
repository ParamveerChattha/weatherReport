import React from 'react';
import Form from './Form'
import './Weather.css'
const APIKEY = "94147b45f9141cb471aa99afaba96549";
class Weather extends React.Component {

    state = {
        data: [],
        date: [],
        city: undefined,
        country: undefined,
        humidity: [],
        temperature: [],
        description: [],
        windSpeed: [],
        error: undefined
    }

    getWeather = async (e) => {
        e.preventDefault();
        const CITYNAME = e.target.elements.city.value;
        const COUNTRYCODE = e.target.elements.country.value;
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${CITYNAME},${COUNTRYCODE}&APPID=${APIKEY}`);
        const dataJson = await api_call.json();
        let temp = [];
        for (let i = 0; i < dataJson.list.length; i += 8) {
            temp.push(dataJson.list[i]);
        }
        this.setState({
            data: temp
        });

        console.log(this.state.data);
        //    console.log(this.state.data[0]);
    }
    componentWillMount = async () => {

        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=bangalore,IN&APPID=${APIKEY}`);
        const dataJson = await api_call.json();
        let temp = [];
        for (let i = 0; i < dataJson.list.length; i += 8) {
            temp.push(dataJson.list[i]);
        }
        this.setState({
            data: temp
        });

        console.log(this.state.data);
        //    console.log(this.state.data[0]);

    }

    weatherPhoto(props) {
        const id = props.weather[0].id
        
    

        if (id=== 800) {
            console.log("800");
            return <img className="weatherimages" src="https://images.pexels.com/photos/518415/pexels-photo-518415.jpeg" alt="weather image" />
        }
        if (id === 801) {
            return <img className="weatherimages" src="https://wxmanreno.files.wordpress.com/2016/11/blue-sky-1.jpg?w=529" alt="weather image" />
        }
        if (id === 804) {
            return <img className="weatherimages" src="https://t3.ftcdn.net/jpg/01/55/26/12/240_F_155261294_VoNrW8hfViCJ7F3bAs66g61YC4C217aN.jpg" alt="weather image" />
        }

        if (id === 522) {
            return <img className="weatherimages" src="https://static1.squarespace.com/static/5899e78b1b10e35238fba886/t/5bd0e4ca4785d33f58ec3c1c/1540416755583/shutterstock_heavy+rain.jpg" alt="weather image" />
        }
        else{
            return<img className="weatherimages" src="https://wi-images.condecdn.net/image/doEYpG6Xd87/crop/810/f/weather.jpg"  alt="weather image" />
        }

    }
    render() {
        return (
            <div >

                <Form getWeather={this.getWeather} />
                <div className="card">

                    <div className="weather_tabs">
                        <ul>
                            {this.state.data.map(item => (
                                <li key="item.dt_txt">
                                 
                                {this.weatherPhoto(item)}
                                    <br />
                                    Date: {(item.dt_txt).substring(0, 10)} <br /> Temp: {(item.main.temp - 273.15).toFixed(2)} c <br /> weather: {item.weather[0].description}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

        )
    }

}
export default Weather;