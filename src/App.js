import React from 'react';
import {Component} from 'react';
import './App.css';

export default class App extends Component{

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/users").then(response => response.json()).then(console.log)
  }

  render() {
  return (
    "hello"
  );
}

}
