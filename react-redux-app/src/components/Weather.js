import React from 'react'

const Weather = props => {
    return (
        <div>
            <h4>{props.weather.currently.temperature}</h4>
        </div>
    )
}

export default Weather