const INITIAL_STATE = {"actual_screen" : "home"}

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case "change_screen" : 
        return {...state, "actual_screen" : action.payload}
        default: return state;
    }
}