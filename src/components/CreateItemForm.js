import React from 'react';
import { updateCreateItemForm } from '../actions/createItemForm.js'
import { connect } from 'react-redux';
import { createItem } from '../actions/createItemForm.js'


const createItemForm = ( props ) => {

    const handleChange = event => {
        const { name, value } = event.target
        props.updateCreateItemForm(name,value)
    }

    const handleOnSubmit = event => {
        event.preventDefault()
        props.createItem(props.storeId, props.price, props.imageUrl, props.name, props.description, props.condition, props.history)
    }

    return (
        <div className="login">
            <h1>Create a New Item for your Store!</h1>
            <form onSubmit={handleOnSubmit}>
            <label>Selling Price (USD): </label>
            <input type="number" min="1" max="10000" name="price" onChange={handleChange} value={props.price}/>
            <br/>
            <label>Image Url: </label>
            <input type="text" name="imageUrl" onChange={handleChange} value={props.imageUrl}/>
            <br/>
            <label>Item Name: </label>
            <input name="name" onChange={handleChange} value={props.name}/>
            <br/>
            <label>Description: </label>
            <input type="textarea" name="description" onChange={handleChange} value={props.description}/>
            <br/>
            <label>Condition: </label>
            <input type="number" min="1" max="10" name="condition" onChange={handleChange} value={props.condition}/>
            <br/>
            <input type="submit" value="Create Item"/>
        </form>
        </div>
    )};

    const mapStateToProps = state => {
        return{
            storeId: state.currentUserStore.id,
            price: parseInt(state.createItemForm.price),
            imageUrl: state.createItemForm.imageUrl,
            name: state.createItemForm.name,
            description: state.createItemForm.description,
            condition: state.createItemForm.condition,
        }
    }

export default connect(mapStateToProps, { updateCreateItemForm, createItem})(createItemForm);
