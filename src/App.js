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
import Store from './components/Store.js';
import Stores from './components/Stores.js'


class App extends Component{

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    const { loggedIn, stores } = this.props
  return (
    <Router>
    <div className="App">
    { loggedIn ? <NavBar/> : <Home/>}
    <AppContainer/>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/signup' component={Signup}/>
      <Route exact path='/profile' component={UserProfile}/>
      <Route exact path='/stores/new' component={createStoreForm}/>
      <Route exact path='/stores' component={Stores}/>
      <Route exact path='/stores/:id' render={props => {
        const store = stores.find(store => store.id === props.match.params.id)
        return <Store store={store} {...props}/>
      }}/>
      <Route exact path='/stores/:id/edit' render={props => {
        const store = stores.find(store => store.id === props.match.params.id)
        return <createStoreForm store={store} {...props}/>
      }}/>
    </div>
    </Router>
  );
}

}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser,
    stores: state.stores
  })
}

export default connect(mapStateToProps, {getCurrentUser})(App)
