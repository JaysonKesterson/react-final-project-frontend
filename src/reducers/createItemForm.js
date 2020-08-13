const initialState = {
    price: 0,
    name: "",
    description:"",
    condition:"",
}

export default (state=initialState, action) => {
    switch(action.type) {
        case "UPDATE_NEW_ITEM_FORM":
            return { 
            ...state,
            [action.formData.name]: action.formData.value
            }
            case "CLEAR_NEW_ITEM_FORM":
                return initialState
            case "UPDATE_EDIT_ITEM_FORM":
                return { 
                ...state,
                [action.formData.name]: action.formData.value
                }
        default:
            return state
    }
}