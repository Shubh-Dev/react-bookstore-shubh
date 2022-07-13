import { v4 as uuidv4 } from 'uuid';
const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/PLtwutbr3xaHC4OZo2oU/books'


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
