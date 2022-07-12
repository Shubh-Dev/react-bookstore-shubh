import React, { useEffect } from 'react';
import { checkPropTypes } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { removeBook, addBook } from '../redux/books/books';
import './Book.css';

const Book = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.bookReducerFunc.books);
  useEffect(() => {
    if (books.length === 0) {
      dispatch(addBook());
    }
  }, [books]);
  const deleteBook = (book) => {
    dispatch(removeBook(book));
  };
  return (
    <div>
      {books.map((book) => (
        <div className="book-container" key={book.id}>
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          <div className="button-container">
            <button type="button" onClick={() => deleteBook(book)}>Remove</button>
          </div>
        </div>
      ))}
    </div>

  );
};

Book.prototype = {
  title: checkPropTypes.isRequired,
  author: checkPropTypes.isRequired,
};

export default Book;
