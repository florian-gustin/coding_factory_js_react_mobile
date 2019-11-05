import counterReducer from "./counter";
import textReducer from "./text";
import historyReducer from "./history";
import numberToFindReducer from './numberToFind'
import {combineReducers} from "redux";

const allReducers = combineReducers({
    counterReducer,
    textReducer,
    historyReducer,
    numberToFindReducer,
})
export default allReducers
