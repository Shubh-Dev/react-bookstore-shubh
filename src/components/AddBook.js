import React from 'react';
import './AddBook.css'

const AddBook = () => {
    return (
  <div className='input-container'>
    <div>
    <h3>Add new Book</h3>
    <form className='form'>
      <input type="text" placeholder="Add Book" />
      <input type="text" placeholder="Author" />
      <button type="button">Add Book</button>
    </form>
    </div>
  </div>
    )
};

export default AddBook;
