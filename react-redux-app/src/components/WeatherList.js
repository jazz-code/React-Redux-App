import React from "react"

import {getData} from "../actions"

import {connect} from "react-redux"

const WeatherList = (props) => {

    return (
        <div>
            <h1>Test</h1>
            <button onClick={props.getData}>Data</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        weather: state.weather
    }
}

export default connect(mapStateToProps, {getData})(WeatherList)