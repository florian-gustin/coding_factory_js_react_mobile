import dataFromApiReducer from "./dataFromApiReducer";
import dataSelectedReducer from "./dataSelectedReducer";
import favoritesListReducer from "./favoritesListReducer";
import usersReducer from "./usersReducer";
import {combineReducers} from "redux";

const allReducers = combineReducers({
    dataSelectedReducer,
    dataFromApiReducer,
    favoritesListReducer,
    usersReducer
})

export default allReducers
