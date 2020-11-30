import React from 'react';

function WeatherConteiner(props){
  return(
    <div className="weather-conteiner">
      <h1>{props.city}</h1>
      <h3>{props.temp}</h3>
    </div>
  );
}

export default WeatherConteiner;
