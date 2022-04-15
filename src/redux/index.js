import {createStore, combineReducers} from 'redux';
import todoReducer from './reducer/todoReducer';
const reducer = combineReducers({
    todoReducer: todoReducer,

});

export const myStore = createStore(reducer);
