import React from "react"

import {connect} from "react-redux"

const WeatherList = (props) => {

    return (
        <div>
            <h1>{props.test}</h1>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        test: state.test
    }
}

export default connect(mapStateToProps, {})(WeatherList)