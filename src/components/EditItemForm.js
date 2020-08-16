import React from 'react';
import { updateEditItemForm } from '../actions/editItemForm.js'
import { connect } from 'react-redux';
import { updateItem } from '../actions/editItemForm.js'


const EditItemForm = ( props ) => {

    const handleChange = event => {
        const { name, value } = event.target
        props.updateEditItemForm(name,value)
    }

    const handleOnSubmit = event => {
        event.preventDefault()
        props.updateItem(props.item.id, props.price, props.name, props.description, props.condition, props.history)
    }

    
    return (
        <div className="login">
        <h1>Edit Your Item</h1>
        <form onSubmit={handleOnSubmit}>
            <label>Selling Price (USD): </label>
            <input type="number" min="1" max="10000" name="price" onChange={handleChange} value={props.price} placeholder={props.item.attributes.price}/>
            <br/>
            <label>Item Name: </label>
            <input name="name" onChange={handleChange} value={props.name} placeholder={props.item.attributes.name}/>
            <br/>
            <label>Description: </label>
            <input type="textarea" name="description" onChange={handleChange} value={props.description} placeholder={props.item.attributes.description}/>
            <br/>
            <label>Condition: </label>
            <input type="number" min="1" max="10" name="condition" onChange={handleChange} value={props.condition} placeholder={props.item.attributes.condition}/>
            <br/>
            <input type="submit" value="Create Item"/>
        </form>
        </div>
    )};

    const mapStateToProps = state => {
        return{
            storeId: state.currentUserStore.id,
            price: parseInt(state.createItemForm.price),
            name: state.createItemForm.name,
            description: state.createItemForm.description,
            condition: state.createItemForm.condition,
        }
    }

export default connect(mapStateToProps, { updateEditItemForm, updateItem})(EditItemForm);
