import React from 'react';
import Form from './Form'

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
            <div>
       <Form getWeather={this.getWeather}/>
       <p> city {this.state.city} </p>
    <ul>
       {this.state.data.map(item =>(
        <li key="item.dt_txt">
        Date: {item.dt_txt } | Temperature: {item.main.temp} | Humidity: {item.main.humidity} | weather: {item.weather[0].description} 
        </li>

       ))}
       </ul>
            </div>
        )
    }

}
export default Weather;