import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


const Stores = (props) => {
const storeCards = props.stores.map(store => (<p key={store.id}><Link className="button" to={`/stores/${store.id}`}>{store.attributes.name}</Link> {store.attributes.items.count} </p>))
     return (
    <div>
    <h1>Stores</h1>
     {storeCards} 
    </div>
   )
}

const mapStateToProps = state => {
    return {
        stores: state.stores
    } 
}

export default connect(mapStateToProps)(Stores)