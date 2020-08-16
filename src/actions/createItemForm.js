export const updateCreateItemForm = (name, value) => {
    return {
        type:"UPDATE_NEW_ITEM_FORM",
        formData: {name,value}
    }
}

export const clearCreateItemForm = () => {
    return {
        type:"CLEAR_NEW_ITEM_FORM",
    }
}

export const addItem = item => {
    return {
        type:"ADD_ITEM",
        item
    }
}

export const createItem = (storeId, price, imageUrl, name, description, condition, history) => {
    return dispatch => {
        const dataToSend = {
            item: {
            store_id: storeId,
            price: price,
            image_url: imageUrl,
            name: name,
            description: description,
            condition: condition
            }
        }
        return fetch('http://localhost:3000/api/v1/items', {
            credentials: "include",
            method: "POST",
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
                dispatch(addItem(item.data))
                dispatch(clearCreateItemForm())
                history.push(`/profile`)
                }
            }) 
    }
}
