import { combineReducers, legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import bookReducerFunc from './books/books';
import CategoryReducer from './categories/categories';

const rootReducer = combineReducers({
    bookReducerFunc
    CategoryReducer
})
