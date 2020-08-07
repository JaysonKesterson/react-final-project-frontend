export default (state = [], action) => {
    switch(action.type) {
        case "SET_STORES":
            return action.stores
        default:
            return state
    }
}