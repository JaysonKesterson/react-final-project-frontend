import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class UserProfile extends React.Component {


    render() {
      const { currentUser, store } = this.props
    return(
      <div className="UserProfile">
            <h2>Welcome {currentUser ? currentUser.attributes.name : "User"}</h2>
            <h2>Your Balance: {currentUser ? `$${currentUser.attributes.balance}`  : "User"}</h2>
           { store ? `My Store: ${store.attributes.name}` : "" }
           <br></br>
           { store ? store.attributes.items.map( item => (<p key={item.id}>Name: {item.name} | Price: ${item.price} | Condition: {item.condition} | <Link to={`/items/${item.id}`}>Detailed Item View</Link> | <Link to={`/items/${item.id}/edit`}>Edit Item</Link> </p>)) : "" }
        {store ? <Link to={`/stores/${store.id}/items/new`}>Add Item</Link> : null}
        <br></br>
        {store ? <Link to={`/stores/${store.id}/edit`}>Edit Store</Link> : null}
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