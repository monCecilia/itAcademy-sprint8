import React from 'react';
import { useState, useEffect } from 'react';
import InfoWeather from './InfoWeather'
import IsLoading from './IsLoading'

const Weather = () => {
    const WeatherLoading = IsLoading(InfoWeather);
    const [weatherState, setWeatherState] =  useState({
      loading: false,
      repos: null,
    });


useEffect(() => {
    setWeatherState({ loading: true });
    const apiUrl = 'https://www.el-tiempo.net/api/json/v2/provincias/08/municipios/08019';
    fetch(apiUrl)
        .then((dataApi) => dataApi.json())
        .then((dataWeather) => {
        setWeatherState({ loading: false, repos: dataWeather });
        });
}, [setWeatherState]);



return (

    <div>
    <div class="container">
    <WeatherLoading isLoading={weatherState.loading} repos={weatherState.repos} />
    </div>
    </div>
);
}
export default Weather;