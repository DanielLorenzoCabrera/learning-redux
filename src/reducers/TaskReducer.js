import uuid from 'react-native-uuid';

const INITIAL_STATE = {
    tasks : {}
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case "add_task" : 
            const taskKey = uuid.v4() ;
            return { ...state, tasks: { ...state.tasks, [taskKey] : { id: taskKey, content : action.payload }} }
            
        case "delete_task":
            const updatedTasks = {...state.tasks};
            const id = action.payload;
            delete updatedTasks[id]
            return { ...state, tasks: {...updatedTasks } }

        default: return state;
    }
}