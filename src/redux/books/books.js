import { v4 as uuidv4 } from 'uuid';
const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const FETCH_BOOK = 'FETCH_BOOK';
const FETCH_BOOK_ERROR = 'FETCH_BOOK_ERROR';
const FETCH_BOOK_LOADING = 'FETCH_BOOK_LOADING';
const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/PLtwutbr3xaHC4OZo2oU/books';

const allBooks = {
  books: [
    { id: uuidv4(), title: 'Mistressof spiced', author: 'Chitra Banerjee Divakaruni' },
    { id: uuidv4(), title: 'Zero to one', author: 'Peter Thiel' },
    { id: uuidv4(), title: 'The Alchemist', author: 'Panlo Coenho' },
    { id: uuidv4(), title: 'Becoming', author: 'Michelle Obama' },
  ],
};

export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const removeBook = (book) => ({
  type: REMOVE_BOOK,
  book,
});

export const fetchBook = (books) => ({
  type: FETCH_BOOK,
  payload: books
});

export const fetchBookError = (error) => ({
  type: FETCH_BOOK_ERROR,
  payload: error
});

export const fetchBookLoading = () => ({
  type: FETCH_BOOK_LOADING,
});

const initialState = {
  books: [],
  loading: false,
  error: null
};

const bookReducerFunc = (state = allBooks, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        books: [...state.books, action.payload],
      };

    case REMOVE_BOOK:
      return {
        books: [...state.books.filter((book) => book.id !== action.book.id)],
      };
    default:
      return state;
  }
};

export default bookReducerFunc;
