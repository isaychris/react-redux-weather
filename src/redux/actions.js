import axios from 'axios';

export const toggleMode = (unit) => ({
    type: "TOGGLE_MODE",
    mode: unit
})

export const fetchWeather = (location) => {
    return async (dispatch) => {
        // signal that a fetch request is about to begin
        dispatch(fetch_BEGIN())

        let current = undefined;

        // first get coordinates of location
        return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=AIzaSyCBQcamdtpHeWv1PleVkC-a-UzJY5ZtLAI`)
            .then((response) => {
                
                // if no coordinates found, reject promise
                if (response.data.status !== "OK") {
                    return Promise.reject();
                }

                current = response.data.results[0].formatted_address
                const lat = response.data.results[0].geometry.location.lat
                const lon = response.data.results[0].geometry.location.lng

                // then get weather data using coordinates
                return axios.get(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/9eca4702b41c21c7f307e9fbfe659fc8/${lat},${lon}`)
            }).then((response) => {
                // fetch request was a success, so pass the data to reducer
                dispatch(fetch_SUCCESS(response.data, current));
            }).catch((err) => {
                // fetch request ended in an error
                dispatch(fetch_ERROR());
            })
    }
}

const fetch_BEGIN = () => ({
    type: "FETCH_BEGIN"
})

const fetch_SUCCESS = (data, location) => ({
    type: "FETCH_SUCCESS",
    payload: data,
    location: location
})

const fetch_ERROR = () => ({
    type: "FETCH_ERROR",
})