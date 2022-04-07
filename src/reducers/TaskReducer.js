const INITIAL_STATE = {
    tasks : {}
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case "add_task" : 
        const taskKey = `task_${Object.keys(state.tasks).length}`;
        return { ...state, tasks: { ...state.tasks, [taskKey] : { content : action.payload }} }
        default: return state;
    }
}