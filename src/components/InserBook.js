import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addBook } from '../redux/books/books';

const InserBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const addTitle = (e) => {
    const title = e.target.value;
    setTitle(title);
  };

  const addAuthor = (e) => {
    const author = e.target.value;
    setAuthor(author);
  };

  const submitBook = (e) => {
    e.preventDefault();
    const newBook = {
      id: uuid(),
      title,
      author,
    };
    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={submitBook}>
      <input type="text" id="title" value={title} onChange={addTitle} placeholder="name of the book" />
      <input type="text" id="author" value={author} onChange={addAuthor} placeholder="author of the book" />
      <button type="submit">Add book</button>
    </form>
  );
};
export default InserBook;
