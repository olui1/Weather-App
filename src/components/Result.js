import React from 'react';
import {Grid} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

export default function Result(props) {
  
  const CtoFConversion = (deg) => {
    return ((9*(deg))/5 + 32).toFixed(0);
  }
  
  const windConversion = (speed) => {
    return ((speed/1000)*3600).toFixed(0);
  }

  const {name, main, weather, wind} = props.getCity;

  return (
    <Grid container justify="center" spacing={4}>
      <Grid item style={{width: '300px'}}>
        <Card>
        <CardContent variant="outlined">
      {name} <br/>
      <img 
              src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
              alt="new"
      /> <br/>
      {weather[0].description} <br/>
      
      {(main.temp).toFixed(0)}°C | {CtoFConversion(main.temp)}°F<br/>
      humidity: {main.humidity}% <br/>
      wind: {windConversion(wind.speed)} km/h
    </CardContent>
    </Card>
    </Grid>
    </Grid>
  )
}
