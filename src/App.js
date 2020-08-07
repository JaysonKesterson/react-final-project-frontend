import React from 'react';
import {Component} from 'react';
import './App.css';
import { connect } from "react-redux";
import { getCurrentUser } from "./actions/currentUser.js";
import NavBar from "./components/NavBar.js"
import AppContainer from './components/AppContainer';
import UserProfile from './components/UserProfile'

class App extends Component{

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
  return (
    <div className="App">
    <NavBar/>
    <UserProfile/>
    <AppContainer/>
    </div>
  );
}

}

export default connect(null, {getCurrentUser})(App)
