
// import { shopReducer } from "../reducers/shopReducer";

// import { createStore } from "redux";

// const shopStore = ()=>{
//     const store  = createStore;
//     return store;
// }

// export default shopStore;





// import { applyMiddleware, combineReducers, compose, createStore } from "redux";
// import blogReducer from "../reducers/blogReducer";
// import { thunk } from "redux-thunk";
// import wishReducer from "../reducers/wishReducer";

// const configureStore = () => {
//   const store = createStore(
//     combineReducers({ blog: blogReducer, wish: wishReducer}),
//     compose(applyMiddleware(thunk))
//   );
//   return store;
// };
// export default configureStore;


import { createStore } from 'redux';
import rootReducer from './reducers'; // rootReducer'ı içe aktarın

const store = createStore(rootReducer);

export default configureStore;