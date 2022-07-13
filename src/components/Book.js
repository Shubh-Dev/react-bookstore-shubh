import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/books';
import Progress from './Progress';
import './Book.css';

const Book = (props) => {
  const {
    id, title, author, category,
  } = props;

  const dispatch = useDispatch();

  const removeHandler = () => {
    dispatch(deleteBook(id));
  };

  return (
    <div className="book-container">
      <div className="book-details">
        <h3>{category}</h3>
        <h2>{title}</h2>
        <p>{author}</p>
        <div>
          <button type="button">Comments</button>
          <button type="button" onClick={removeHandler}>Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div>
        <Progress />
        <div>
          <h2>CURRENT CHAPTER</h2>
          <h3>Chapter 1: &quot; Intuition&quot;</h3>
          <button type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>

  );
};

Book.prototype = {
  title: PropTypes.isRequired,
  author: PropTypes.isRequired,
};

export default Book;
