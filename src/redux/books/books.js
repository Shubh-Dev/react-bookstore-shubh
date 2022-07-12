const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

import { v4 as uuidv4 } from "uuid";

const allBooks = {
  books: [
    {id: uuidv4(), title: 'Mistressof spiced', author: 'Chitra Banerjee Divakaruni'},
    {id: uuidv4(), title: 'Zero to one', author: 'Peter Thiel'},
    {id: uuidv4(), title: 'The Alchemist', author: 'Panlo Coenho'},
    {id: uuidv4(), title: 'Becoming', author: 'Michelle Obama'}
  ],
};

export const AddBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});

const bookReducerFunc = (state = allBooks, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        books: [...state.books, action.book]
      };

    case REMOVE_BOOK:
      return {
        books: [...state.books.filter((book) => book.id !==action.book.id)]
      };
    default:
      return state;
  }
};

export default bookReducerFunc;
