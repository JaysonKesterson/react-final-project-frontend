import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class UserProfile extends React.Component {

    render() {
      const { currentUser, store } = this.props
    return(
      <div className="UserProfile">
            <h2>Welcome {currentUser ? currentUser.attributes.name : "User"}</h2>
            <h2>Your Balance: {currentUser ? `$${currentUser.attributes.balance}`  : "User"} <Link className="button"to={`/users/${currentUser.id}/addFunds`}>Add Funds</Link> </h2> 
           { store ? <h2>{store.attributes.name} {store ? <Link className="button"to={`/stores/${store.id}/edit`}>Edit Store</Link> : null} </h2> : "" }
           <br></br>
           { store ? store.attributes.items.map( item => (<li key={item.id}>Name: {item.name} | Price: ${item.price} | Condition: {item.condition} | <Link className="button" to={`/items/${item.id}`}>Detailed Item View</Link> | <Link className="button" to={`/items/${item.id}/edit`}>Edit Item</Link> </li>)) : "" }
        {store ? <h2><Link className="button-center" to={`/stores/${store.id}/items/new`}>Add Item</Link></h2> : null}
        </div>
    )
    
}
}

const mapStateToProps = state => {
    return {
      currentUser: state.currentUser,
      store: state.currentUserStore
    }
  }

export default connect(mapStateToProps)(UserProfile)