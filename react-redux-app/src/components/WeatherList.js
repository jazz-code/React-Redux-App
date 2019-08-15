import React from "react"
import Loader from 'react-loader-spinner';
import {connect} from "react-redux"

import {getData} from "../actions"

import {Weather} from "./Weather"

const WeatherList = (props) => {

    return (
        <div>
            <h1>Weather App</h1>
            <button onClick={props.getData}>
        {props.isLoading ? (
          <Loader type="TailSpin"  />
        ) : (
          'Get The Weather'
        )}
      </button>
            {props.weather && props.weather.map(items => (
                <Weather key={items.id} weatherData={items} />
            ))}
          
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        weather: state.weather,
        isLoading: state.isLoading
    }
}

export default connect(mapStateToProps, {getData})(WeatherList)