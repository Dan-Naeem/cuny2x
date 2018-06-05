import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styles from './styles/stylesheet.js';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import WeatherDisplay from './components/WeatherDisplay';


const PLACES = [
  { name: "Palo Alto", zip: "94303" },
  { name: "San Jose", zip: "94088" },
  { name: "Santa Cruz", zip: "95062" },
  { name: "Honolulu", zip: "96803" }
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      activePlace: 0
    };
  }
  render() {
    const activePlace = this.state.activePlace;
    return (
      <div className="App">

        <AppBar position="static" color="primary" style={styles.bar} >
          <Toolbar>
            <Typography variant="title" color="inherit">
              My WeatherApp
            </Typography>
          </Toolbar>
        </AppBar>

        <Card style={styles.card}>
          <WeatherDisplay key={activePlace} zip={PLACES[activePlace].zip} />
          <CardActions >
            {PLACES.map((place, index) => (
              <Button size="small" color="primary"
                key={index}
                onClick={() => {
                  this.setState({ activePlace: index });
                }}
              >
                {place.name}
              </Button>
            ))}
          </CardActions>
        </Card>

      </div>
    );
  }
}


export default App;
