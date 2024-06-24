import {apiKey} from '../constants/index'

import axios from 'axios'

const forecastEndPoint = (params)=>`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${params.cityName}&days=${params.days}&aqi=no&alerts=no`
const locationsEndPoint = (params)=>`https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${params.cityName}`

const apiCall = async (endpoint)=>{
    const options = {
        method: 'GET',
        url: endpoint
    }

    try{
        const response = await axios.request(options)
        return response.data
    }
    catch(err){
        console.log('error: ',err);
        return null
    }
}

export const fetchWeatherForcast = (params)=>{
    return apiCall(forecastEndPoint(params))
}

export const fetchLocationForcast = (params)=>{
    return apiCall(locationsEndPoint(params))
}