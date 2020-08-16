export default (state = [], action) => {
    switch(action.type) {
        case "SET_ITEMS":
            return action.items
        case "ADD_ITEM":
            console.log(action.item)
            return state.concat(action.item)
        case "EDIT_ITEM":
            return state.map(item => item.id === action.item.id ? action.item : item)
        case "DELETE_ITEM":
            return state.filter(item => item.id === action.itemId ? false : true)
            default:
            return state
    }
}