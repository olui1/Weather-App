import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


const useStyles = makeStyles({
 
  gridItem:{
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',  
  },

  root:{
    width: '450px',
  }
})

export function MajorCities(props) {
  
  const classes = useStyles();

  const CtoFConversion = (deg) => {
    return ((9*(deg))/5 + 32).toFixed(0);
  }

  const windConversion = (speed) => {
    return ((speed/1000)*3600).toFixed(0);
  }

    return (
      <Grid 
      container
      spacing={4}
      >
     
        {

          props.topCities.map(({name, id, main, weather, wind}) => 
          
         
          <Grid item xs={12} sm={6} md={4} className={classes.gridItem}>
          <Card className={classes.root}>
            
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
                   
          ) 
        }
      
      </Grid>
    )
  
}

export default MajorCities
