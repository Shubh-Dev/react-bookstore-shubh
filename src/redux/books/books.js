const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const FETCH_BOOK = 'FETCH_BOOK';
const FETCH_BOOK_ERROR = 'FETCH_BOOK_ERROR';
const FETCH_BOOK_LOADING = 'FETCH_BOOK_LOADING';
const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/PLtwutbr3xaHC4OZo2oU/books';

export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});

export const fetchBook = (books) => ({
  type: FETCH_BOOK,
  payload: books,
});

export const fetchBookError = (error) => ({
  type: FETCH_BOOK_ERROR,
  payload: error,
});

export const fetchBookLoading = () => ({
  type: FETCH_BOOK_LOADING,
});

const initialState = {
  books: [],
  loading: false,
  error: null,
};

export const getBooksFromApi = () => (dispatch) => {
  dispatch(fetchBookLoading());
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      const newBooks = [];
      Object.keys(data).forEach((key) => {
        if (key) {
          newBooks.push({
            ...data[key][0],
            item_id: key,
          });
        }
      });
      dispatch(fetchBook(newBooks));
    })
    .catch((error) => {
      dispatch(fetchBookError(error.message));
    });
};

export const postBooks = (book) => {
  async (dispatch) => {
   await fetch(URL, {
    method: 'POST',
    headers: {
      'content-type': 'applicaion/json',
    },
    body: JSON.stringify((book)),
  }).then(() => {
    dispatch(addBook(book));
  });
 }
};

export const deleteBook = (id) => (dispatch) => {
  fetch(`${URL}/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({ item_id: id }),
  })
    .then(() => {
      dispatch(removeBook(id));
    });
};

const bookReducerFunc = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOK_LOADING:
      return {
        ...state,
        loading: true,
      };

    case ADD_BOOK:
      return {
        ...state,
        loading: false,
        books: [...state.books, action.payload],
      };

    case REMOVE_BOOK:
      return {
        ...state,
        loading: false,
        books: state.books.filter((book) => book.item_id !== action.payload),
      };

    case FETCH_BOOK:
      return {
        ...state,
        loading: false,
        books: action.payload,
      };

    case FETCH_BOOK_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default bookReducerFunc;
