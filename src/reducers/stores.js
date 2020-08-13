export default (state = [], action) => {
    switch(action.type) {
        case "SET_STORES":
            return action.stores
        case "ADD_STORE":
            return state.concat(action.store)
        case "EDIT_STORE":
            return state.map(store => store.id === action.store.id ? action.store : store)
        case "DELETE_STORE":
            return state.filter(store => store.id === action.storeId ? false : true)
            default:
            return state
    }
}