import React, { Component } from 'react';
import MajorCities from './components/MajorCities';
import Search from './components/Search';
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import './App.css';

export class App extends Component{
  
  constructor(props){
    super(props);
    this.state={
      cities: []
    }
  }
  
  componentDidMount(){
    axios.get('http://api.openweathermap.org/data/2.5/group?id=5128581,2643743,2968815,1850147,524894,292223&units=metric&appid=342a7f80397342d698df652497d9e740')
    .then(res => {
      this.setState({cities: res.data.list})
      console.log(res.data.list)
    })
    .catch(err => console.log(err))
  }

  render(){
    if (this.state.cities.length > 0) {
      
      return (
        <div>
          <Paper elevation="14">
          <Search />
          
            <MajorCities topCities={this.state.cities}/>
          </Paper>  
       </div>
      );
    } 
    else {
      return (
        <div>LOADING</div>
      );
    } 
  }
}

export default App;
