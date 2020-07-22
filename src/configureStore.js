import {applyMiddleware, combineReducers, createStore} from "redux";
import appReducer from "./state/appReducer";
import thunkMiddleware from "redux-thunk" //import thunkmiddleware
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
    appReducer: appReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
