export const setStores = stores => {
    return {
        type: "SET_STORES",
        stores
    }
}

export const getStores = () => {
    return dispatch => {
      return fetch("http://localhost:3000/api/v1/stores", {
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
            dispatch(setStores(response.data))
          }
        })
        .catch(console.log)
    }
  }

