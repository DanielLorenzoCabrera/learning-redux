const INITIAL_STATE = {tasks : {} }

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case "add_task" : 
        const taskKey = `task_${Object.keys(state.tasks).length}`;
        console.log('llega')
        return {...state, tasks: { {taskKey} : action.payload } }
        default: return state;
    }
}