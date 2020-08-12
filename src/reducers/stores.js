export default (state = [], action) => {
    switch(action.type) {
        case "SET_STORES":
            return action.stores
        case "ADD_STORE":
            return state.concat(action.store)
        default:
            return state
    }
}