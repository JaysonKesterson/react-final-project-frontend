import React from 'react';
import {Component} from 'react';
import './App.css';
import { connect } from "react-redux";
import { getCurrentUser } from "./actions/currentUser.js";
import NavBar from "./components/NavBar.js";
import AppContainer from './components/AppContainer';
import UserProfile from './components/UserProfile';
import Login from "./components/Login.js"
import Signup from "./components/Signup.js"
import { BrowserRouter as Router, Route } from 'react-router-dom'


class App extends Component{

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
  return (
    <Router>
    <div className="App">
    <NavBar/>
    <AppContainer/>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/signup' component={Signup}/>
      <Route exact path='/profile' component={UserProfile}/>
    </div>
    </Router>
  );
}

}

export default connect(null, {getCurrentUser})(App)
