import { applyMiddleware, legacy_createStore as createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import bookReducerFunc from './books/books';
import CategoryReducer from './categories/categories';

const rootReducer = combineReducers({
  bookReducerFunc,
  CategoryReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
