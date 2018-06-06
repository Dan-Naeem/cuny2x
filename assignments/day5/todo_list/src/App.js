import React, { Component } from 'react';
import './App.css';
import { styles } from './styles/styles.js';

import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

class App extends Component {
  constructor () {
    super();
    this.state = {
      name: "",
      listOfNames: [],
      delName: "",
    }
  }

  handleChange(event) {
    const name = event.target.value;
    this.setState({
      name
    })
    console.log('this is the name in handleChange: ', this.state.name)
  }

  handleChangeDelName(event) {
    const delName = event.target.value;
    this.setState({
      delName
    })
    console.log("delName: ", this.state.delName)
  }

  handleSubmit(event) {
    event.preventDefault();
    const name = this.state.name;

    let updatedListOfNames = this.state.listOfNames;
    updatedListOfNames.push({name, isStarred: false});

    this.setState({
      listOfNames : updatedListOfNames
    })
    let text = this.refs.text;
    text.value = "";
    console.log('new list of name: ', this.state.listOfNames)
  }

  handleDelete(event) {
    event.preventDefault();
    const delName = this.state.delName;
    console.log("gonna del: ", delName);
    //create an empty array
    let updatedListOfNames = [];
    console.log("empty list: ", updatedListOfNames);
    //go thru current array
    for (let i = 0; i < this.state.listOfNames.length; i++ ) {
      //if name matches up, dont add
      if (delName === this.state.listOfNames[i].name){
        //skip over
      }
      //else push onto updatedListOfNames
      else {
        updatedListOfNames.push(this.state.listOfNames[i]);
      }
    }//end for
    //overwrite listOfNames
    this.setState({
      listOfNames: updatedListOfNames,
    })
  }

  render() {
    const listOfNames = this.state.listOfNames;
    const name = listOfNames.map((list, i) => (
      <li key={i}>
        {list.name}
      </li>)
      );
    return (
      <div style={styles.app}>

        <AppBar position="static" style={styles.appHeader} >
          <Toolbar>
            <Typography variant="title" color="inherit" >
              <p style={styles.appTitle}>
                Welcome to my React App
              </p>
            </Typography>
          </Toolbar>
        </AppBar>

        <div style={styles.main}>

          <div style={styles.edit}>

          <Card style={styles.card}>
            <CardContent>
              <form onSubmit={this.handleSubmit.bind(this)} >
                <label>
                  Name:
                  <input type="text" name="name" ref="text" onChange={this.handleChange.bind(this)} />
                </label>
                <Button type="submit" value="submit">
                  Add
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card style={styles.card}>
            <CardContent>
              <form onSubmit={this.handleDelete.bind(this)} >
                <label>
                  Delete:
                  <input type="text" name="name" onChange={this.handleChangeDelName.bind(this)} ></input>
                </label>
                <Button type="submit" value="submit" >
                  Delete
                </Button>
              </form>
            </CardContent>
          </Card>

        </div>

          <div style={styles.list}>
            <Card style={styles.card}>
              <h1>
                Your List
              </h1>
              <ul style={styles.ulType}>
                { (name) ? name : null}
              </ul>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
