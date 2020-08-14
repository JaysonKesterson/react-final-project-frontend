import React from 'react'
import { Link } from 'react-router-dom'

const Store = ({ store }) => {
    return (
    store ?
    <div>
    <h2>{store.attributes.name}</h2>
    {store.attributes.items.map( item => (<p key={item.id}><Link className="button" to={`/items/${item.id}`}>{item.name}</Link></p>))}
    </div> :
    ""
    )
}


export default Store