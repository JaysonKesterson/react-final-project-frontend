import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


const Stores = (props) => {
const storeCards = props.stores.map(store => (<p key={store.id}><Link to={`/stores/${store.id}`}>{store.attributes.name}</Link></p>))
     return (
     storeCards 
   )
}

const mapStateToProps = state => {
    return {
        stores: state.stores
    } 
}

export default connect(mapStateToProps)(Stores)