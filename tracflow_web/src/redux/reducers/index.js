import {combineReducers} from "redux";
import FormDetailsReducer from "../reducers/formReducers";
import SignInDetailsReducer from "../reducers/signInReducer";


const combinedReducers = combineReducers({ FormDetailsReducer, SignInDetailsReducer});
export default  combinedReducers;