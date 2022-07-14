import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { postBooks } from '../redux/books/books';
import './scss/AddBook.scss';

const AddBook = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, author, category } = e.target.elements;
    const newBook = {
      item_id: uuidv4(),
      title: title.value,
      author: author.value,
      category: category.value,
    };

    dispatch(postBooks(newBook));
    title.value = '';
    author.value = '';
    category.value = '';
  };

  return (
    <div>
      <div className="horizontal-line" />
      <div className="input-container">
        <div>
          <h3 className="add-book-title">ADD NEW BOOK</h3>
          <form className="form" onSubmit={handleSubmit}>
            <input
              className="title-input"
              type="text"
              name="title"
              placeholder="Book Title"
              required
            />
            <input
              className="author-input"
              type="text"
              name="author"
              placeholder="Book Author"
              required
            />
            <input
              className="category-input"
              type="text"
              name="category"
              placeholder="Category"
              required
            />
            <button type="submit" className="submit-btn">Add Book</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
