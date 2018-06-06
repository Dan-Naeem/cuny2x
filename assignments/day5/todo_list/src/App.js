import React, { Component } from 'react';
import './App.css';
import { appStyles } from './styles/styles.js';

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
    updatedListOfNames.push(name);
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
    //go thru current array
    for (let i = 0; i < this.state.listOfNames.length; i++ ) {
      //if name matches up, dont add
      if (delName === this.state.listOfNames[i]){
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
    const name = listOfNames.map((name, i) => (<li key={i}>{name}</li>));
    return (
      <div style={appStyles.app}>

        <p style={appStyles.appIntro}>
          Welcome to my React App
        </p>

        <form onSubmit={this.handleSubmit.bind(this)} >
          <label>
            Name:
            <input type="text" name="name" ref="text" onChange={this.handleChange.bind(this)} />
          </label>
          <input type="submit" value="Submit" />
        </form>

        <br />

        <form onSubmit={this.handleDelete.bind(this)} >
          <label>
            Delete:
            <input type="text" name="name" onChange={this.handleChangeDelName.bind(this)} ></input>
          </label>
          <input type="submit" value="submit" ></input>
        </form>

        <ul>
          { (name) ? name : null}
        </ul>

      </div>
    );
  }
}

export default App;
