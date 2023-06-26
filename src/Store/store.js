import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import counterReducer from './CounterReducer';
// Create the Redux store with thunk middleware
const store = createStore(counterReducer, applyMiddleware(thunk));

export default store;
