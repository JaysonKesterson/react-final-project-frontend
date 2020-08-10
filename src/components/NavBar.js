import React from 'react'
import { connect } from 'react-redux'
import Logout from "./Logout.js"
import { NavLink } from 'react-router-dom'


const NavBar = ( {currentUser, loggedIn} ) => {

    return(
        <div className="NavBar">
          <NavLink exact activeClass to="/stores">All Stores  |  </NavLink>
          <NavLink exact activeClass to="/stores/new">Create Store  |  </NavLink>
          { loggedIn ? <Logout/> : null}
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