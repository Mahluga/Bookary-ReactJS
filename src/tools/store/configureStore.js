import { createStore } from 'redux';
import rootReducer from './reducers'; // rootReducer'ı içe aktarın

const store = createStore(rootReducer);

export default configureStore;