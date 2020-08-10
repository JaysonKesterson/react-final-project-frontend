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
import Home from "./components/Home.js"
import createStoreForm from "./components/createStoreForm.js"
import { BrowserRouter as Router, Route } from 'react-router-dom'


class App extends Component{

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    const { loggedIn } = this.props
  return (
    <Router>
    <div className="App">
    { loggedIn ? <NavBar/> : <Home/>}
    <AppContainer/>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/signup' component={Signup}/>
      <Route exact path='/profile' component={UserProfile}/>
      <Route exact path='/stores/new' component={createStoreForm}/>
    </div>
    </Router>
  );
}

}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser
  })
}

export default connect(mapStateToProps, {getCurrentUser})(App)
