import { combineReducers } from 'redux';
import bookReducerFunc from './books/books';
import CategoryReducer from './categories/categories';

const rootReducer = combineReducers({
  bookReducer: bookReducerFunc,
  categoryReducer: CategoryReducer,
});

const store = combineReducers(rootReducer);

export default store;
