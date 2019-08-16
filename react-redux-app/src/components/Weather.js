import React from 'react'

const Weather = props => {
    console.log("props", props.weatherData)
    return (
        <div>
            <h4>Temp: {props.weatherData.currently.temperature}</h4>
            <img src={props.weatherData.daily.data.icon} alt="weather_icon"/>
        </div>
    )
}

export default Weather