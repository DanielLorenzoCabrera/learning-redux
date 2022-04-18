import { combineReducers } from "redux";
import ListReducer from "./ListReducer";
import SelectionReducer from "./SelectionReducer";
import ChangeScreenReducer from "./ChangeScreenReducer";
import TaksReducer from "./TaskReducer";
import ChangeColorReducer from "./ChangeColorReducer";


export default combineReducers({
    libraries : ListReducer,
    selectedLibraryId : SelectionReducer,
    actual_screen : ChangeScreenReducer,
    tasks : TaksReducer,
    colors : ChangeColorReducer
})