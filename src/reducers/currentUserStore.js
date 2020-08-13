export default (state = [], action) => {
    switch(action.type) {
        case "SET_CURRENT_USER_STORE":
            return action.store
        case "CLEAR_CURRENT_USER_STORE":
            return null
        default:
            return state
    }
}