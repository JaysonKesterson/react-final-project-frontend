export const updateCreateStoreForm = (name, value) => {
    return {
        type:"UPDATE_NEW_STORE_FORM",
        formData: {name,value}
    }
}