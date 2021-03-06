import { resetLoginForm } from './loginForm.js'
import { resetSignupForm } from './signupForm.js'
import { getStores } from './storeInfo.js'
import { getItems } from './itemInfo.js'

// sync
export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user
    }
}

export const setCurrentUserStore = store => {
    return {
        type: "SET_CURRENT_USER_STORE",
        store
    }
}

export const updateAddFundsForm = (name, value) => {
    return {
        type:"UPDATE_ADD_FUNDS_FORM",
        formData: {name,value}
    }
}

export const clearAddFundsForm = () => {
    return {
        type:"CLEAR_ADD_FUNDS_FORM",
    }
}

export const updateUserFunds = user => {
    return{
        type: "UPDATE_USER_FUNDS",
        user
    }
}




// async
export const login = (credentials, history) => {
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
            dispatch(getItems())
            dispatch(resetLoginForm())
            history.push('/')
        }
    
       })
       .catch(console.log)
   } 
}

export const signup = (credentials, history) => {
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
             dispatch(getItems())
             dispatch(resetSignupForm())
             history.push('/')
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
             dispatch(getItems())
         }
     
        })
        .catch(console.log)
    } 
 }

 export const getCurrentUserStore = () => {
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/get_current_user_store", {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(response => response.json())
        .then( store => {
         if (store.error) {
             (alert(store.error))
         } else {
             dispatch(setCurrentUserStore(store.data))
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

export const updateCurrentUserBalance = (userId, deposit, history) => {
    return dispatch => {
        console.log("dipatching")
        const dataToSend = {
            user: {
            deposit: deposit
            }
        }
        return fetch(`http://localhost:3000/api/v1/users/${userId}`, {
            credentials: "include",
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dataToSend)
        })
            .then(response => response.json())
            .then(user => {
                if (user.errors) {
                    alert(user.errors)
                } else {
                dispatch(clearAddFundsForm())
                dispatch(updateUserFunds(user.data))
                history.push(`/profile`)
                }
            }) 
    }
}