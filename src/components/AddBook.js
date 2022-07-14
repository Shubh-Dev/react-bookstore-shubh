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
    <div className="input-container">
      <div>
        <h3>Add new Book</h3>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Add Book"
            required
          />
          <input
            type="text"
            name="author"
            placeholder="Author"
            required
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            required
          />
          <button type="submit">Add Book</button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
