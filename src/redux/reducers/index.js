import { combineReducers } from "redux";
import userreducer from "./userReducer";

const rootReducer = combineReducers({
    auth: authreducer
});

export default rootReducer;