import React from 'react'
import { connect } from 'react-redux';
import { updateCurrentUserBalance, updateAddFundsForm } from '../actions/currentUser.js'



const AddFundsForm = (props) => {

    const handleChange = event => {
        const { name, value } = event.target
        props.updateAddFundsForm(name,value)
    }

    const handleOnSubmit = event => {
        event.preventDefault()
        props.updateCurrentUserBalance(props.currentUser.id, props.deposit, props.history)
    }

    return (
        <div className="login">
        <h1>Add Funds To Your Balance!</h1>
        <form onSubmit={handleOnSubmit}>
            <input type="number" min="1" max="10000" name="deposit" onChange={handleChange} value={props.deposit} placeholder={"Amount"}/>
            <input type="submit" value="Add Funds"/>
        </form>
        </div>
    )};

    const mapStateToProps = state => {
        return{
            deposit: state.addFundsForm.deposit,
            currentUser: state.currentUser
        }
    }

export default connect(mapStateToProps, { updateCurrentUserBalance, updateAddFundsForm })(AddFundsForm);