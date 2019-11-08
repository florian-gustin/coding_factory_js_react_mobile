import dataFromApiReducer from "./dataFromApiReducer";
import favoritesListReducer from "./favoritesListReducer";
import usersReducer from "./usersReducer";
import {combineReducers} from "redux";
import searchedTextReducer from "./searchedTextReducer";
import signReducer from "./signReducer";


const allReducers = combineReducers({
    dataFromApiReducer,
    favoritesListReducer,
    usersReducer,
    searchedTextReducer,
    signReducer
})

export default allReducers
