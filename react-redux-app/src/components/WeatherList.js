import React from "react"
import Loader from 'react-loader-spinner';
import {connect} from "react-redux"

import {getData} from "../actions"

import Weather from "./Weather"

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
      {props.weather &&
        props.weather.map(item => <Weather key={item.name} weatherData={item} />)}
    </div>
  );
};

const mapStateToProps = state => {
    console.log("weather state", state.weather)
    console.log("weather", state)
  return {
    isLoading: state.isLoading,
    weather: state.weather
  };
};
export default connect(
  mapStateToProps,
  { getData }
)(WeatherList);