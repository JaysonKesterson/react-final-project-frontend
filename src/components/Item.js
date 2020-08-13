import React from 'react'
import { connect } from 'react-redux'
import { destroyItem } from '../actions/editItemForm.js'

const Item = ({ item, currentUser, loggedIn, history, destroyItem, stores }) => {

    const store = stores.find(store => store.attributes.user_id === parseInt(currentUser.id))

    const handleButtonClick = () => {
        destroyItem(item.id, history)
      }

    return (
    item ?
    <div>
    <h2>Name of Item: {item.attributes.name}</h2>
    <h2>Price of Item: ${item.attributes.price}</h2>
    <h2>Description: {item.attributes.description}</h2>
    <h2>Condition: {item.attributes.condition}</h2>
    {loggedIn && item.attributes.store_id === parseInt(store.id) ? <button onClick={handleButtonClick}>Delete Item</button> : <button>Purchase Item</button>}
    </div> :
    ""
    )
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser,
        loggedIn: !!state.currentUser,
        stores: state.stores
    } 
}



export default connect(mapStateToProps, { destroyItem })(Item)