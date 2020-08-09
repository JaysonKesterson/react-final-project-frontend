import { resetLoginForm } from './loginForm.js'
import { resetSignupForm } from './signupForm.js'
import { getStores } from './storeInfo.js'

// sync
export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user
    }
}



// async
export const login = credentials => {
   return dispatch => {
       return fetch("http://localhost:3000/api/v1/login", {
           credentials: "include",
           method: "POST",
           headers: {
               "Content-Type": "application/json"
           },
           body: JSON.stringify(credentials)
       })
       .then(response => response.json())
       .then( user => {
        if (user.error) {
            (alert(user.error))
        } else {
            dispatch(setCurrentUser(user.data))
            dispatch(getStores())
            dispatch(resetLoginForm())
        }
    
       })
       .catch(console.log)
   } 
}

export const signup = credentials => {
    return dispatch => {
        const userInfo = {
            user: credentials
        }
        return fetch("http://localhost:3000/api/v1/signup", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userInfo)
        })
        .then(response => response.json())
        .then( user => {
         if (user.error) {
             (alert(user.error))
         } else {
             dispatch(setCurrentUser(user.data))
             dispatch(getStores())
             dispatch(resetSignupForm())
         }
     
        })
        .catch(console.log)
    } 
 }

export const logout = () => {
    return dispatch => {
        dispatch(clearCurrentUser())
        return fetch('http://localhost:3000/api/v1/logout', {
            credentials: "include",
            method: "DELETE"
        })
    }
}

export const getCurrentUser = () => {
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/get_current_user", {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(response => response.json())
        .then( user => {
         if (user.error) {
             (alert(user.error))
         } else {
             dispatch(setCurrentUser(user.data))
             dispatch(getStores())
         }
     
        })
        .catch(console.log)
    } 
 }

export const clearCurrentUser = () => {
    return{
        type: "CLEAR_CURRENT_USER"
    }
}