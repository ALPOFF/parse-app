import {applyMiddleware, combineReducers, createStore} from "redux";
import appReducer from "./state/appReducer";
import thunkMiddleware from "redux-thunk" //import thunkmiddleware

let reducers = combineReducers({
    appReducer: appReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
