import React from "react";
import { useState, useEffect } from "react";
import { Card, TextWeather, Title } from "../Styled";

function Weather({ loading }) {
  
  const [weatherState, setWeatherState] = useState(null);

  useEffect(() => {
    getWeather()
    
  }, [loading]);
  
  const getWeather = () => {
    fetch(
      "http://api.weatherapi.com/v1/current.json?key=8c9873737bea4e949fb201622210605&q=Barcelona&aqi=no",
      {
        headers: {
          Accept: "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((dataWeather) => setWeatherState(dataWeather));

  }

  if (weatherState === null) {
    return <p>Loading ...</p>;
  }
  return (
    <React.Fragment>
      <Card>
        <TextWeather>{weatherState.location.name}</TextWeather>
        <Title>{weatherState.current.temp_c}º</Title>
        <TextWeather>{weatherState.current.condition.text}</TextWeather>
      </Card>
    </React.Fragment>
  );
}

export default Weather;
