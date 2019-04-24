import React from 'react';
import Details from '.components/Details.js'
import './Weather.css'
const APIKEY = "94147b45f9141cb471aa99afaba96549";


class Weather extends React.Component {

    state={
        details: undefined,
        error: undefined, 
    };
    getWeather = async (e) => {
        e.preventDefault();
        const CITYNAME = e.target.elements.city.value;
        const COUNTRYCODE = e.target.elements.country.value;
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${CITYNAME},${COUNTRYCODE}&APPID=${APIKEY}`);
        const data = await api_call.json();

        for (let i = 0; i < data.list.length; i += 8) {
        }
        console.log(this.state.data);
        this.changeState(data)
    }
    changeState(data){

        this.setState({
            details: data.list.map(item =>({
                humidity: item.main.humidity,
                temp: item.main.temp,
                weather: item.weather[0],
            })),

             error: undefined,
        });
         this.renderForecast();   
        }
        renderForeCast(){
            const {details} = this.state;
            return details.map(element =>(
                <Details
                key = {element.dt}
                date={element.dt}
                temp={element.temp}
                weather={element.weather}
                humidity={element.humidity}

                />




            ));

        }


    componentWillMount = async () => {

        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=bangalore,IN&APPID=${APIKEY}`);
        const dataJson = await api_call.json();
        for (let i = 0; i < dataJson.list.length; i += 8) {
        }

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
            <div>


            </div>
        )
    }

}
export default Weather;