import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';
import './AddBook.css';

const AddBook = () => {
  const dispatch = useDispatch();
  const newBook = (book) => {
    dispatch(addBook(book));
  };

  const inputState = {
    id: '',
    title: '',
    author: '',
  };

  const [state, setState] = useState(inputState);

  const onchange = (e) => {
    setState((state) => ({
      ...state,
      id: uuidv4(),
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className="input-container">
      <div>
        <h3>Add new Book</h3>
        <form className="form">
          <input
            type="text"
            value={state.title}
            onChange={onchange}
            name="title"
            placeholder="Add Book"
          />
          <input
            type="text"
            value={state.author}
            onChange={onchange}
            name="author"
            placeholder="Author"
          />
          <button type="button" onClick={() => newBook(state)}>Add Book</button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;

// {
//   ...state,
//   id: uuidv4(),
//   [e.target.name]: e.target.value,
// }
