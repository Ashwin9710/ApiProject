// import weather from './weather';
import request from "request";

function getCurrentWeather(place ="Kuala Lumpur", callback) {
    const apikey = '46ab02210ffd4c08b7211554191706';
    request({
        method: "GET",
        uri: `http://api.apixu.com/v1/current.json?key=${apikey}&q=${place}`
    }, callback)
}

function getForecastWeather(lat, lon,callback) {
    const apikey = '455e3eb72d5313bf0326ebae2ad583f8';
    request({
        method: "GET",
        uri: `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${apikey}/${lat},${lon}`
        // uri: `https://api.darksky.net/forecast?key=${apikey}&lat=${lat}lon=${lon}`
    }, callback)
}

export default { getCurrentWeather, getForecastWeather }