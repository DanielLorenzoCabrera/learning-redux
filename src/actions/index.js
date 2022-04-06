export const selectLibrary = (libraryId) => {
    return {
        type : "select_library",
        payload : libraryId 
    }
}

export const changeScreen = (screenKey) => {
    return {
        type : "change_screen",
        payload : screenKey 
    }
}