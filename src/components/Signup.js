import React from 'react'
import { connect } from 'react-redux'
import { updateSignupForm } from '../actions/signupForm.js'
import { signup } from '../actions/currentUser.js'

const Signup = ({ signupFormData, updateSignupForm, signup }) => {

    const handleChange = event =>{
        const { name,value } = event.target
        const updatedFormInfo = {
            ...signupFormData,
            [name]: value
        }
        updateSignupForm(updatedFormInfo)
    }

    const handleSubmit = event => {
        event.preventDefault()
        signup(signupFormData)
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type = "text" placeholder = "name" name="name" onChange={handleChange} value={signupFormData.name}/>
            <input type = "text" placeholder = "email" name="email" onChange={handleChange} value={signupFormData.email}/>
            <input type = "text" placeholder = "password" name="password" onChange={handleChange} value={signupFormData.password}/>
            <input type="submit" value="Sign Up!"/>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        signupFormData: state.signupForm
    }
}

export default connect(mapStateToProps, { updateSignupForm, signup })(Signup)