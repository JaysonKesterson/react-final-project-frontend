import React from 'react'
import { connect } from 'react-redux'
import Logout from "./Logout.js"
import { NavLink } from 'react-router-dom'


const NotLoggedBar = ( {currentUser, loggedIn} ) => {

    return(
        <div className="App-header">
          <NavLink exact to="/">Home</NavLink>
          <NavLink exact to="/login">Login</NavLink>
          <NavLink exact to="/signup">Sign Up</NavLink>
        </div>
    )
}

const mapStateToProps = ({ currentUser}) => {
    return {
      currentUser,
      loggedIn: !!currentUser
    }
  }

export default connect(mapStateToProps)(NotLoggedBar)