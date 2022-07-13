import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import AddBook from './AddBook';
import { getBooksFromApi } from '../redux/books/books';

const BookList = () => {
  const { books, loading } = useSelector((state) => state.bookReducerFunc);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooksFromApi());
  }, [dispatch]);

  let fetchedBooks = '';
  if (loading) {
    fetchedBooks = <h2>Hang on...</h2>;
  } else {
    fetchedBooks = books.map((book) => (
      <div
        key={book.item_id}
        className="holder"
      >
        <Book
          id={book.item_id}
          title={book.title}
          author={book.author}
          category={book.category}
        />
      </div>
    ));
  }

  return (
    <div>
      <ul>
        {fetchedBooks}
      </ul>
      <AddBook />
    </div>
  );
};

export default BookList;
