import React from 'react';

const InfoWeather = (props) => {
  const {repos} = props;
  if (!repos|| repos.length === 0) return <p>No repos, sorry</p>;
  return (
    <div>
        <div class="container">
          
          <h3>El clima hoy en {repos.municipio.NOMBRE}</h3>
          <ul>
            <li>{repos.temperatura_actual}º</li>
            <li>{repos.stateSky.description}</li>
            <li>
              {repos.temperaturas.max}º/{repos.temperaturas.min}º
            </li>
            <li>Humedad: {repos.humedad} %</li>
            <li>Viento: {repos.viento} km/h.</li>
            <li>Probabilidad lluvia: {repos.lluvia} %</li>
          </ul>
        </div>
      </div>


   
  );
};
export default InfoWeather;