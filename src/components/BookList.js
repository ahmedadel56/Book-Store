import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import { getBooksList } from '../redux/books/books';
import '../components-style/BookList.css';

const BookList = () => {
  const books = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const booksReauest = async () => {
      await dispatch(getBooksList());
    };
    booksReauest();
  }, []);
  return (
    <ul className="book-list">
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
      <div className="line-break" />
    </ul>
  );
};
export default BookList;
