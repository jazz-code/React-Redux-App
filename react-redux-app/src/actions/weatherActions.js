import axios from "axios"

export const FETCH_WEATHER_DATA = "FETCH_WEATHER_DATA"

const getData = () => {
    return dispatch => {
        dispatch({ type: FETCH_WEATHER_DATA });
        axios
        .get(`https://api.darksky.net/forecast/e57963e324236f51284d2c4b7dee8fe8/37.8267,-122.4233`)
        .then(res => console.log(res))
    }
}