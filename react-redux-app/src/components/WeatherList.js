import React from "react"

import {getData} from "../actions"

import {connect} from "react-redux"

const WeatherList = (props) => {

    return (
        <div>
            <p>{console.log(props.weather)}</p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        weather: state.weather
    }
}

export default connect(mapStateToProps, {getData})(WeatherList)