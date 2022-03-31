import { combineReducers } from "redux";
import ListReducer from "./ListReducer";
import SelectionReducer from "./SelectionReducer";

export default combineReducers({
    libraries : ListReducer,
    selectedLibraryId : SelectionReducer
})