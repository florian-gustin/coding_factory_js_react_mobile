import counterReducer from "./counter";
import textReducer from "./text";
import historyReducer from "./history";
import numberToFindReducer from './numberToFind'
import {combineReducers} from "redux";
import winReducer from "./win";

const allReducers = combineReducers({
    counterReducer,
    textReducer,
    historyReducer,
    numberToFindReducer,
    winReducer,
})
export default allReducers
