import React, { Component } from 'react';
import './App.css';
import { appStyles } from './styles/styles.js';

class App extends Component {
  constructor () {
    super();
    this.state = {
      name: "",
      listOfNames: [],
    }
  }
  handleChange(event) {
    const name = event.target.value;
    this.setState({
      name
    })
    console.log('this is the name in handleChange: ', this.state.name)
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

        <ul>
          { (name) ? name : null}
        </ul>

      </div>
    );
  }
}

export default App;
