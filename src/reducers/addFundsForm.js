const initialState = {
    deposit: ""
}

export default (state=initialState, action) => {
    switch(action.type) {
        case "UPDATE_ADD_FUNDS_FORM":
            return { 
            ...state,
            [action.formData.name]: action.formData.value
            }
            case "CLEAR_ADD_FUNDS_FORM":
                return initialState
            default: 
            return state
    }
}