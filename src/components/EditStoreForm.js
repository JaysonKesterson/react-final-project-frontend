import React from 'react';
import { updateEditStoreForm } from '../actions/editStoreForm.js'
import { connect } from 'react-redux';
import { updateStore, destroyStore } from '../actions/editStoreForm.js'

const EditStoreForm = ( props ) => {

    const handleChange = event => {
        const { name, value } = event.target
        props.updateEditStoreForm(name,value)
    }

    const handleOnSubmit = event => {
        event.preventDefault()
        props.updateStore(props.formData, props.store.id, props.history)
    }

    const handleButtonClick = () => {
        props.destroyStore(props.store.id, props.history)
    }

    return (
        <>
        <form onSubmit={handleOnSubmit}>
            <input name="name" onChange={handleChange} value={props.name} placeholder={props.store? props.store.attributes.name : "New Name of Store"} required/>
            <input type="submit" value="Update Store"/>
        </form>
        <button onClick={handleButtonClick}>Delete Store</button>
        </>
    )};

    const mapStateToProps = state => {
        const userId = state.currentUser ? state.currentUser.id : "" 
        return{
            formData: state.createStoreForm,
            userID: userId
        }
    }

export default connect(mapStateToProps, { updateEditStoreForm, updateStore, destroyStore})(EditStoreForm);
