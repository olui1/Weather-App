import React, { Component } from 'react';
import {Grid} from '@material-ui/core';
import Result from './Result';
import Appbar from './Appbar';
import axios from 'axios';

export class Search extends Component {
  constructor(props){
    super(props);
    this.state={
      search: '',
      searchResult: {},
      hasSubmitted: false
    }
    this.getAPI = this.getAPI.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);

  }


  handleChange(event) {
    this.setState({search: event.target.value});
  }

  
  handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      this.getAPI();
    }  
  }

  getAPI(){
    if(this.state.search.length !== 0){
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.search}&units=metric&appid=342a7f80397342d698df652497d9e740`)
        .then(res => {
          this.setState({
            searchResult: res.data, 
            search: '',
            hasSubmitted: true
          })
        })
        .catch(err => alert("No City Found in Database")) 
      }
  }
  
  render() {
    return (
      <Grid>
      <Appbar 
        getInput={this.state.search} 
        handleChange={this.handleChange} 
        handleKeyDown={this.handleKeyDown}
      />
      <br/>
      {
        (this.state.hasSubmitted)
        &&
        <Grid item style={{textAlign: 'center'}}>
        <Result getCity={this.state.searchResult}/>
        </Grid>
      }
      </Grid>
    )
  }
}

export default Search
