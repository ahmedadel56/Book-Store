import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = ({ book }) => {
  const { id, title, author } = book;
  const dispatch = useDispatch();

  const remove = () => {
    dispatch(removeBook(id));
  };
  return (
    <li>
      <h3>
        {title}
        {' '}
        {author}
      </h3>
      <button type="button" onClick={remove}> remove</button>
    </li>
  );
};

Book.defaultProps = {
  book: {
    id: '',
    title: '',
    author: '',
  },
};
export default Book;
