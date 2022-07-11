const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

export const AddBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});

const reducerFunc = (initialStateOfBooks = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return initialStateOfBooks.push(action.payload);

    case REMOVE_BOOK:
      return initialStateOfBooks.filter((book) => book.id !== action.id);
    default:
      return initialStateOfBooks;
  }
};

export default reducerFunc;
