import React from 'react'

const Weather = props => {
    console.log("props", props.weatherData)
    return (
        <div>
            <h4>{props.weatherData.currently.temperature}</h4>
        </div>
    )
}

export default Weather