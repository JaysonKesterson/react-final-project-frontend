export const setItems = items => {
    return {
        type: "SET_ITEMS",
        items
    }
}

export const getItems = () => {
    return dispatch => {
      return fetch("http://localhost:3000/api/v1/items", {
        credentials: "include",
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      })
        .then(r => r.json())
        .then(response => {
          if (response.error) {
            alert(response.error)
          } else {
            dispatch(setItems(response.data))
          }
        })
        .catch(console.log)
    }
  }

