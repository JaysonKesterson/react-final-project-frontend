import React from 'react'
import { connect } from 'react-redux'
import Logout from "./Logout.js"
import { NavLink } from 'react-router-dom'


const NavBar = ( {currentUser, loggedIn} ) => {

    return(
        <div className="App-header">
          <NavLink exact to="/">Home</NavLink>
          <NavLink exact to="/stores">All Stores</NavLink>
          <NavLink exact to="/store/new">Create Store</NavLink>
          <NavLink exact to="/profile">Profile</NavLink>
          <Logout/> 
        </div>
    )
}

const mapStateToProps = ({ currentUser}) => {
    return {
      currentUser,
      loggedIn: !!currentUser
    }
  }

export default connect(mapStateToProps)(NavBar)