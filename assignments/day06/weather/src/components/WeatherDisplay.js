import React, { Component } from 'react';

import LinearProgress from '@material-ui/core/LinearProgress';

import Card from '@material-ui/core/Card';


import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class WeatherDisplay extends Component {
  constructor() {
    super();
    this.state = {
      weatherData: null
    };
  }
  componentDidMount() {
    const zip = this.props.zip;
    const URL = "http://api.openweathermap.org/data/2.5/weather?q=" +
      zip +
      "&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=imperial";
    fetch(URL).then(res => res.json()).then(json => {
      this.setState({ weatherData: json });
    });
  }
  render() {
    const weatherData = this.state.weatherData;
    if (!weatherData) return <LinearProgress />;
    const weather = weatherData.weather[0];
    const iconUrl = "http://openweathermap.org/img/w/" + weather.icon + ".png";
    return (
      <div>
        <h1>
          {weather.main} in {weatherData.name}
          <img src={iconUrl} alt={weatherData.description} />
        </h1>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Current: {weatherData.main.temp}°</TableCell>
              <TableCell>High: {weatherData.main.temp_max}°</TableCell>
              <TableCell>Low: {weatherData.main.temp_min}°</TableCell>
              <TableCell>Wind Speed: {weatherData.wind.speed} mi/hr</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default WeatherDisplay;
