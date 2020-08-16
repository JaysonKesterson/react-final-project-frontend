import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class UserProfile extends React.Component {

    render() {
      const { currentUser, store } = this.props
    return(
      <div className="UserProfile">
            <h1>Welcome {currentUser ? currentUser.attributes.name : "User"}</h1>
            <h2>Your Balance: {currentUser ? `$${currentUser.attributes.balance}`  : "User"} <Link className="button"to={`/users/${currentUser.id}/addFunds`}>Add Funds</Link> </h2> 
           { store ? <h2>{store.attributes.name} {store ? <Link className="button"to={`/stores/${store.id}/edit`}>Edit Store</Link> : null} </h2> : "" }
           <br></br>
    { store ? store.attributes.items.map( item => (<li key={item.id}> <div className="itemcard"><img src={item.image_url} alt="Item Image" width="100" height="100"></img></div> <div class="card-container">Name: {item.name} <br/> Price: ${item.price} <br/> Condition: {item.condition} <br/><br/> <Link className="button" to={`/items/${item.id}`}>Detailed Item View</Link> | <Link className="button" to={`/items/${item.id}/edit`}>Edit Item</Link> </div></li>)) : "" }
        {store ? <h2><Link className="button" to={`/stores/${store.id}/items/new`}>Add Item</Link></h2> : null}
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