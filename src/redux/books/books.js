import { v4 as uuidv4 } from 'uuid';

// const GET_BOOK = 'GET_BOOK';
const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

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

// export const getBook = (books) => ({
//   type: GET_BOOK,
//   payload: books,
// });

const bookReducerFunc = (state = allBooks, action) => {
  switch (action.type) {
    // case GET_BOOK:
    //   return {
    //     ...state,
    //     book: action.payload,
    //   };
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
