import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import bookReducerFunc from './books/books';
import CategoryReducer from './categories/categories';

const rootReducer = combineReducers({
  bookReducerFunc,
  CategoryReducer,
});

const store = configureStore(rootReducer);

export default store;
