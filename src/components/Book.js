import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/books';
import Progress from './Progress';
import './scss/Book.scss';

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
        <h3 className="category">{category}</h3>
        <h2 className="title">{title}</h2>
        <p className="author">{author}</p>
        <div className="button-container">
          <button className="btn-btn" type="button">Comments</button>
          <button className="btn-btn" type="button" onClick={removeHandler}>Remove</button>
          <button className="btn-btn" type="button">Edit</button>
        </div>
      </div>
      <div className="progress-details">
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

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
