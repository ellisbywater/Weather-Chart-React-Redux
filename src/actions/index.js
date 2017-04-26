import axios from 'axios'

const API_KEY = "25e7dd8511e2ee28ee2b3285732b5efd"
const ROOT_URL = `api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'


export function fetchWeather(city){
    const url = '${ROOT_URL}&q=${city},us'
    const request = axios.get(url)

    console.log('Request: ', request)

    return {
        type: FETCH_WEATHER,
        payload: request
    }
    
    
}