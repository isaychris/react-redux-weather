import { createStore, applyMiddleware } from 'redux';
import { fetchReducer } from './reducer';
import thunk from 'redux-thunk';
export const store = createStore(fetchReducer, applyMiddleware(thunk));

store.subscribe(() => console.log(store.getState()))
