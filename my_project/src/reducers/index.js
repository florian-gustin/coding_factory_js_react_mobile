import dataFromApiReducer from "./dataFromApiReducer";
import favoritesListReducer from "./favoritesListReducer";
import usersReducer from "./usersReducer";
import {combineReducers} from "redux";
import searchedTextReducer from "./searchedTextReducer";
import signReducer from "./signReducer";
import darkModeReducer from "./darkModeReducer";


const allReducers = combineReducers({
    dataFromApiReducer,
    favoritesListReducer,
    usersReducer,
    searchedTextReducer,
    signReducer,
    darkModeReducer
})

export default allReducers
