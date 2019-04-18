import React from 'react';
import Form from './Form'

const APIKEY = "94147b45f9141cb471aa99afaba96549";
class Weather extends React.Component{

getWeather = async (e) =>{
    e.preventDefault();
    const CITYNAME = e.target.elements.city.value;
    const COUNTRYCODE = e.target.elements.country.value;
  const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${CITYNAME},${COUNTRYCODE}&APPID=${APIKEY}`);

const data = await api_call.json();
console.log(data);
}
    render(){
        return(
            <div>
       <Form getWeather={this.getWeather}/>
            </div>
        )
    }

}
export default Weather;