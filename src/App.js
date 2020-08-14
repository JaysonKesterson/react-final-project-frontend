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
import createStoreForm from "./components/CreateStoreForm.js"
import EditStoreForm from "./components/EditStoreForm.js"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Store from './components/Store.js'
import Item from './components/Item.js'
import Stores from './components/Stores.js'
import createItemForm from './components/CreateItemForm.js'
import { getCurrentUserStore } from './actions/currentUser.js'
import EditItemForm from './components/EditItemForm.js'
import AddFundsForm from './components/AddFundsForm.js'



class App extends Component{

  componentDidMount() {
    this.props.getCurrentUser()
  }

  componentDidUpdate() {
    if (this.props.loggedIn) { this.props.getCurrentUserStore(this.props.currentUser.id) }

  }

  render() {
    const { loggedIn, stores, items } = this.props
  return (
    <Router>
    <div className="App">
    { loggedIn ? <NavBar/> : <Home/>}
    <Route exact path='/' component={AppContainer}/>   
      <Route exact path='/stores/:id/items/new' component={createItemForm}/>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/signup' component={Signup}/>
      <Route exact path='/profile' component={UserProfile}/>
      <Route exact path='/stores/new' component={createStoreForm}/>
      <Route exact path='/stores' component={Stores}/>
      <Route exact path='/users/:id/addFunds' component={AddFundsForm}/>
      <Route exact path='/stores/:id' render={props => {
        const store = stores.find(store => store.id === props.match.params.id)
        return <Store store={store} {...props}/>
      }}/>
      <Route exact path='/items/:id' render={props => {
        const item = items.find(item => item.id === props.match.params.id)
        return <Item item={item} {...props}/>
      }}/>
      <Route exact path='/stores/:id/edit' render={props => {
        const store = stores.find(store => store.id === props.match.params.id)
        return <EditStoreForm store={store} {...props}/>
      }}/>
      <Route exact path='/items/:id/edit' render={props => {
        const item = items.find(item => item.id === props.match.params.id)
        return <EditItemForm item={item} {...props}/>
      }}/>
    </div>
    </Router>
  );
}

}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser,
    stores: state.stores,
    currentUser: state.currentUser,
    items: state.items
  })
}

export default connect(mapStateToProps, {getCurrentUser, getCurrentUserStore})(App)
