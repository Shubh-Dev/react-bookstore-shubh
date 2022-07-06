import React from 'react';
import './Book.css';

const Book = (book) => {
    let { title, author } = book;
    title = "Mistress of Spices";
    author = "Chitra Banerjee Divakaruni"
return (
  <div className="book-container">
    <h3>{title}</h3>
    <p>{author}</p>
    <div className='button-container'>
    <button type='button'>Comments</button>
    <button type='button'>Remove</button>
    <button type='button'>Edit</button>
    </div>
  </div>
)
};

export default Book;
