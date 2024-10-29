import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";
import { shopReducer } from "../reducers/shopReducer";

const shopStore = ()=>{
    const store  = createStore(shopReducer,applyMiddleware(thunk));
    return store;
}

export default shopStore;