import React from 'react'
import { Link } from 'react-router-dom'

const Store = ({ store, items }) => {
    return (
    store ?
    <div>
    {console.log(items)}
    <h2>{store.attributes.name}</h2>
    
    {items.map( item => (<p key={item.id}><div className="itemcard"><img src={item.attributes.image_url} alt="Item" width="100" height="100"></img></div><br/><Link className="button" to={`/items/${item.id}`}>{item.attributes.name}</Link></p>))}</div>
     :
    ""
    )
}


export default Store