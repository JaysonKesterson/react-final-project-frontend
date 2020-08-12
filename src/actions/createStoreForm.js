export const updateCreateStoreForm = (name, value) => {
    return {
        type:"UPDATE_NEW_STORE_FORM",
        formData: {name,value}
    }
}

export const clearCreateStoreForm = () => {
    return {
        type:"CLEAR_NEW_STORE_FORM",
    }
}

export const addStore = store => {
    return {
        type:"ADD_STORE",
        store
    }
}

export const createStore = (name, userId, history) => {
    return dispatch => {
        const nameToSend = {
            store: {
            name: name,
            user_id: userId
            }
        }
        return fetch('http://localhost:3000/api/v1/stores', {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(nameToSend)
        })
            .then(response => response.json())
            .then(store => {
                if (store.errors) {
                    alert(store.errors)
                } else {
                dispatch(addStore(store.data))
                dispatch(clearCreateStoreForm())
                history.push(`/stores/${store.data.id}`)
                }
            }) 
    }
}

