import axios from "axios"

export const FETCH_WEATHER_DATA_START = "FETCH_WEATHER_DATA_START"
export const FETCH_WEATHER_DATA_SUCCESS = "FETCH_WEATHER_DATA_SUCCESS"
export const FETCH_WEATHER_DATA_FAILURE = "FETCH_WEATHER_DATA_FAILURE"

export const getData = () => {
    return dispatch => {
        dispatch({ type: FETCH_WEATHER_DATA_START });
        // const headers = {
        //     'Content-Type': 'application/json',
        //     'X-Auth-Token': "e57963e324236f51284d2c4b7dee8fe8"
        // }
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = "https://api.darksky.net/forecast/e57963e324236f51284d2c4b7dee8fe8/40.6782,73.9442";
        axios
        .get(proxyurl + url)
        .then(res => {
            console.log(res)
            dispatch({type: FETCH_WEATHER_DATA_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({ type: FETCH_WEATHER_DATA_FAILURE, payload: err.response });
          });
        
    }
}

