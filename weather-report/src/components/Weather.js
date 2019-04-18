import React from 'react';
import Form from './Form'
import './Weather.css'
const APIKEY = "94147b45f9141cb471aa99afaba96549";
class Weather extends React.Component{

state = {
    data: [],
    date: [],
    city: undefined,
    country: undefined,
    humidity :[],
    temperature: [],
    description: [],
    windSpeed: [],
    error: undefined
}

getWeather = async (e) =>{
    e.preventDefault();
    const CITYNAME = e.target.elements.city.value;
    const COUNTRYCODE = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${CITYNAME},${COUNTRYCODE}&APPID=${APIKEY}`);
    const dataJson = await api_call.json();
    let temp = [];
    for(let i = 0; i<dataJson.list.length;i+=8){
        temp.push(dataJson.list[i]);
       }
    this.setState({
        data: temp
    });

    console.log(this.state.data);



//    console.log(this.state.data[0]);

}
    render(){
        return(
            <div >
       <Form getWeather={this.getWeather}/>
<div className="card">

       <div className = "weather_tabs card-body">
            <ul>
            {this.state.data.map(item =>(
                <li key="item.dt_txt">
                <img className="image" src="https://wi-images.condecdn.net/image/doEYpG6Xd87/crop/2040/f/weather.jpg" alt="weather image" />
                <br/>
                Date: {(item.dt_txt).substring(0,10) } <br/> Temp: {(item.main.temp -273.15).toFixed(2)} c <br/> weather: {item.weather[0].description} 
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