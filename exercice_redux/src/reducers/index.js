import counterReducer from "./counter";
import textReducer from "./text";
import {combineReducers} from "redux";

const allReducers = combineReducers({
    counterReducer,
    textReducer,
})
export default allReducers
