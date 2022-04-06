import { combineReducers } from "redux";
import ListReducer from "./ListReducer";
import SelectionReducer from "./SelectionReducer";
import ChangeScreenReducer from "./ChangeScreenReducer";

export default combineReducers({
    libraries : ListReducer,
    selectedLibraryId : SelectionReducer,
    actual_screen : ChangeScreenReducer
})