import {createStore , combineReducers , applyMiddleware}from 'redux'
import thunk from 'redux-thunk'


import TodoReducer from './todoRedux/todoReducer'
// const rootReducers = combineReducers({
//     todo : TodoReducer
// })
const store = createStore(TodoReducer , applyMiddleware(thunk));
export default store;