const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

export const AddBook = (book) => {
    return {
        type: ADD_BOOK,
        payload: book
    }
};

export const removeBook = (id) => {
    return {
        type: REMOVE_BOOK,
        payload: id
    }
}