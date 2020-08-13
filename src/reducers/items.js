export default (state = [], action) => {
    switch(action.type) {
        case "SET_ITEMS":
            return action.items
        case "ADD_ITEM":
            return state.concat(action.item)
        case "EDIT_ITEM":
            return state.map(item => item.id === action.item.id ? action.item : item)
        case "DELETE_ITEM":
            console.log("DELETE ITEM FIRE")
            return state.filter(item => item.id === action.itemId ? false : true)
            default:
            return state
    }
}