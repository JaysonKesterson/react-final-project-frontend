import React from 'react';
import { updateCreateStoreForm } from '../actions/createStoreForm.js'
import { connect } from 'react-redux';
import { createStore } from '../actions/createStoreForm.js'

const createStoreForm = ( props ) => {

    const handleChange = event => {
        const { name, value } = event.target
        props.updateCreateStoreForm(name,value)
    }

    const handleOnSubmit = event => {
        event.preventDefault()
        props.createStore(props.name, props.userID, props.history)
    }

    return (
        <div className="login">
        <h1>New Store Form</h1>
        <form onSubmit={handleOnSubmit}>
            <input name="name" onChange={handleChange} value={props.name} placeholder={"Name of Store"}/>
            <input type="submit" value="Create Store"/>
        </form>
        </div>
    )};

    const mapStateToProps = state => {
        const userId = state.currentUser ? state.currentUser.id : "" 
        return{
            name: state.createStoreForm.name,
            userID: userId
        }
    }

export default connect(mapStateToProps, { updateCreateStoreForm, createStore})(createStoreForm);
