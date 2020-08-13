const initialState = {
    name:""
}

export default (state=initialState, action) => {
    switch(action.type) {
        case "UPDATE_NEW_STORE_FORM":
            return { 
            ...state,
            [action.formData.name]: action.formData.value
            }
            case "CLEAR_NEW_STORE_FORM":
                return initialState
            case "UPDATE_EDIT_STORE_FORM":
                return { 
                ...state,
                [action.formData.name]: action.formData.value
                }
        default:
            return state
    }
}