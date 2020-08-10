import React from 'react';
import { updateCreateStoreForm } from '../actions/createStoreForm.js'
import { connect } from 'react-redux';

const createStoreForm = ( props ) => {

    const handleChange = event => {
        const { name, value } = event.target
        updateCreateStoreForm(name,value)
    }

    const handleOnSubmit = event => {
        event.preventDefault()
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <input name="name" onChange={handleChange} value={props.name} placeholder={"Name of Store"}/>
            <input type="submit" value="Create Store"/>
        </form>
    )};

    const mapStateToProps = state => {
        return{
            name: state.createStoreForm.name
        }
    }

export default connect(mapStateToProps, { updateCreateStoreForm})(createStoreForm);
