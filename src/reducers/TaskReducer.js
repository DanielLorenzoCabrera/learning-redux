import uuid from 'react-native-uuid';
import { act } from 'react-test-renderer';

const INITIAL_STATE = {
  tasks: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'add_task':
      const taskKey = uuid.v4();
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [taskKey]: {id: taskKey, content: action.payload, done: false},
        },
      };

    case 'delete_task':
      const updatedTasks = {...state.tasks};
      const id = action.payload;
      delete updatedTasks[id];
      return {...state, tasks: {...updatedTasks}};
    
      case 'mark_as_done':
          const doneTask = {...tasks[action.payload], done : true}
          return {...state, tasks: {[action.payload] : doneTask  }}

    default:
      return state;
  }
};
