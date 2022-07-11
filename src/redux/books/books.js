const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

export const AddBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});

const bookReducerFunc = (initialStateOfBooks = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return initialStateOfBooks.push(action.payload);

    case REMOVE_BOOK:
      return initialStateOfBooks.filter((book) => book.id !== action.id);
    default:
      return initialStateOfBooks;
  }
};

export default bookReducerFunc;
