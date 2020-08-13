import { clearCreateStoreForm } from './createStoreForm.js'

export const updateEditStoreForm = (name, value) => {
    return {
        type:"UPDATE_EDIT_STORE_FORM",
        formData: {name,value}
    }
}

export const editStore = store => {
    return {
        type:"EDIT_STORE",
        store
    }
}

export const deleteStore = storeId => {
    return {
        type:"DELETE_STORE",
        storeId
    }
}

export const destroyStore = (storeId, history) => {
    return dispatch => {
      return fetch(`http://localhost:3000/api/v1/stores/${storeId}`, {
        credentials: "include",
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(r => r.json())
        .then(resp => {
            dispatch(deleteStore(storeId))
            history.push(`/stores`)
        })
  
    }
}

export const updateStore = (formData, storeId , history) => {
    return dispatch => {
        const nameToSend = {
            store: {
            name: formData.name,
            }
        }
        return fetch(`http://localhost:3000/api/v1/stores/${storeId}`, {
            credentials: "include",
            method: "PATCH",
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
                dispatch(editStore(store.data))
                dispatch(clearCreateStoreForm())
                history.push(`/stores/${storeId}`)
                }
            }) 
    }
}
