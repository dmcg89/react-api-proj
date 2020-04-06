import React, { Component } from 'react';
class Weather extends Component {
    constructor(props) {
        super(props);
            this.weatherData = props.weatherData
        // this.state = {
        //     weatherData: props.weatherData,
        // }
    }
    render() {
        console.log('here')
        console.log(this.weatherData)
        // const { main, description } = this.state.weatherData.weather[0];
        // const { temp, pressure, humidity, temp_min, temp_max } = this.state.weatherData.main;
        // const { speed, deg } = this.state.weatherData.wind
        const { main, description } = this.weatherData.weather[0];
        const { temp, pressure, humidity, temp_min, temp_max } = this.weatherData.main;
        const { speed, deg } = this.weatherData.wind
        const town  = this.weatherData.name
        console.log(this.weatherData.name)
    // const { weatherData } = props;

        return (
            <div>
            <div className="weather"><span className="bold">Condition:</span> {main} </div>
            <div className="weather"><span className="bold">Details:</span>   {description}</div>
            <div className="weather"><span className="bold">Temperature:</span>   {Math.round(temp)} °F </div>
            <div className="weather"><span className="bold">Min Temp:</span>  {temp_max} {Math.round.temp_min} °F </div>
            <div className="weather"><span className="bold">Max Temp:</span>  {temp_min} °F </div>
            <div className="weather"><span className="bold">Pressure: </span>   {pressure} hPa</div>
            <div className="weather"><span className="bold">Humidity: </span>  {humidity} %</div>
            <div className="weather"><span className="bold">Wind Speed: </span>  {speed} mph</div>
            <div className="weather"><span className="bold"> Wind Direction:  </span>  {deg} deg</div>
            <div className="weather"><span className="bold"> City:  </span>  {town}</div>
        
            </div>
        );
        }
}

export default Weather;