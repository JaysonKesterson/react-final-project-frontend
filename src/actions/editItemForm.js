import { clearCreateItemForm } from './createItemForm.js'

export const updateEditItemForm = (name, value) => {
    return {
        type:"UPDATE_EDIT_ITEM_FORM",
        formData: {name,value}
    }
}

export const editItem = item => {
    return {
        type:"EDIT_ITEM",
        item
    }
}

export const deleteItem = itemId => {
    return {
        type:"DELETE_ITEM",
        itemId
    }
}

export const destroyItem = (itemId, history) => {
    return dispatch => {
      return fetch(`http://localhost:3000/api/v1/items/${itemId}`, {
        credentials: "include",
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(r => r.json())
        .then(resp => {
            console.log("in resp")
            dispatch(deleteItem(itemId))
            history.push(`/profile`)
        })
  
    }
}

export const updateItem = (itemId, price, name, description, condition, history) => {
    return dispatch => {
        const dataToSend = {
            item: {
            price: price,
            name: name,
            description: description,
            condition: condition
            }
        }
        return fetch(`http://localhost:3000/api/v1/items/${itemId}`, {
            credentials: "include",
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dataToSend)
        })
            .then(response => response.json())
            .then(item => {
                if (item.errors) {
                    alert(item.errors)
                } else {
                dispatch(editItem(item.data))
                dispatch(clearCreateItemForm())
                history.push(`/profile`)
                }
            }) 
    }
}
