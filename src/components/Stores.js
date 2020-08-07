import React from 'react'
import { connect } from 'react-redux'
import StoreCard from './StoreCard'

const Stores = (props) => {
    const storeCards = props.stores.map(store => <StoreCard store={store} key={store.id}/>)
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