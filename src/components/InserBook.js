import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addBook } from '../redux/books/books';

const InserBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const addTitle = (e) => {
    const title = e.target.value;
    setTitle(title);
  };

  const addCategory = (e) => {
    const category = e.target.value;
    setCategory(category);
  };

  const submitBook = (e) => {
    e.preventDefault();
    const newBook = {
      id: uuid(),
      title,
      category,
    };
    dispatch(addBook(newBook));
    setTitle('');
    setCategory('');
  };

  return (
    <form onSubmit={submitBook}>
      <input type="text" id="title" value={title} onChange={addTitle} placeholder="name of the book" />
      <input type="text" id="category" value={category} onChange={addCategory} placeholder="category of the book" />
      <button type="submit">Add book</button>
    </form>
  );
};
export default InserBook;
