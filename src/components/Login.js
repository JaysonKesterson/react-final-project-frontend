import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from '../actions/loginForm.js'
import { login } from '../actions/currentUser.js'

const Login = ({ loginFormData, updateLoginForm, login, history }) => {

    const handleChange = event =>{
        const { name,value } = event.target
        const updatedFormInfo = {
            ...loginFormData,
            [name]: value
        }
        updateLoginForm(updatedFormInfo)
    }

    const handleSubmit = event => {
        event.preventDefault()
        login(loginFormData, history)
    }

    return(
        <div className="login">
        <h1>Log In with Existing Account!</h1>
        <form onSubmit={handleSubmit}>
            <input type = "text" placeholder = "email" name="email" onChange={handleChange} value={loginFormData.email}/>
            <br/>
            <input type = "text" placeholder = "password" name="password" onChange={handleChange} value={loginFormData.password}/>
            <br/>
            <input type="submit" value="Log In"/>
        </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        loginFormData: state.loginForm
    }
}

export default connect(mapStateToProps, { updateLoginForm, login })(Login)