import React from 'react'
import { Link } from 'react-router-dom'

const Store = ({ store }) => {
    return (
    store ?
    <div>
    <h2>{store.attributes.name}</h2>
    <p>{store.attributes.items}</p>
    <Link to={`/trips/${store.id}/edit`}>Edit</Link>
    </div> :
    <p>No Store Found</p>
    )
}


export default Store