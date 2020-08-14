import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import currentUser from './reducers/currentUser.js'
import loginForm from './reducers/loginForm.js'
import stores from './reducers/stores.js'
import signupForm from './reducers/signupForm.js'
import createStoreForm from './reducers/createStoreForm.js'
import items from './reducers/items.js'
import createItemForm from './reducers/createItemForm.js'
import currentUserStore from './reducers/currentUserStore.js'
import addFundsForm from './reducers/addFundsForm.js'



const reducer = combineReducers({
  currentUser,
  loginForm,
  stores, 
  signupForm,
  createStoreForm,
  items,
  createItemForm,
  currentUserStore, 
  addFundsForm
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
