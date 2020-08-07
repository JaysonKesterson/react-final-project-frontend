import React from 'react'
import { connect } from 'react-redux'

const UserProfile = ( {currentUser} ) => {

    return(
        <div className="UserProfile">
            {/* {currentUser ? <strong>Your Store: {currentUser.attributes.store.name}</strong> : "" } */}
        </div>
    )
}

const mapStateToProps = ({ currentUser}) => {
    return {
      currentUser
    }
  }

export default connect(mapStateToProps)(UserProfile)