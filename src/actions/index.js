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

export const add_task = (taskText) => {
    return {
        type : "add_task",
        payload : taskText 
    }
}

export const delete_task = (taskId) => {
    return {
        type : "delete_task",
        payload : taskId
    }
}
export const mark_as_done = (taskId) => {
    return {
        type : "mark_as_done",
        payload : taskId
    }
}
export const change_primary_color = (color) => {
    return {
        type : "change_primary_color",
        payload : color
    }
}
export const change_secondary_color = (color) => {
    return {
        type : "change_secondary_color",
        payload : color
    }
}
export const change_base_color = (color) => {
    return {
        type : "change_base_color",
        payload : color
    }
}