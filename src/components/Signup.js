import React from 'react'
import { connect } from 'react-redux'
import { updateSignupForm } from '../actions/signupForm.js'
import { signup } from '../actions/currentUser.js'

const Signup = ({ signupFormData, updateSignupForm, signup, history }) => {

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
        signup(signupFormData, history)
    }

    return(
        <div className="sign-up">
        <h1>Sign Up for a New Account!</h1>
        <form onSubmit={handleSubmit}>
            <input type = "text" placeholder = "name" name="name" onChange={handleChange} value={signupFormData.name}/>
            <br/>
            <input type = "text" placeholder = "email" name="email" onChange={handleChange} value={signupFormData.email}/>
            <br/>
            <input type = "text" placeholder = "password" name="password" onChange={handleChange} value={signupFormData.password}/>
            <br/>
            <input type="submit" value="Sign Up!"/>
        </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        signupFormData: state.signupForm
    }
}

export default connect(mapStateToProps, { updateSignupForm, signup })(Signup)