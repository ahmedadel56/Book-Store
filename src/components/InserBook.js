import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addBook } from '../redux/books/books';
import '../components-style/InsertBook.css';

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
      <h2>ADD NEW BOOK</h2>
      <div className=" inputs-style">
        <input type="text" id="title" value={title} onChange={addTitle} placeholder="name of the book" required />
        <input list="categories" id="category" value={category} onChange={addCategory} placeholder="category of the book" required />
        <datalist id="categories">
          <option value="Science Fiction" aria-label="Science Fiction" />
          <option value="Action" aria-label="Action" />
          <option value="Drama" aria-label="Drama" />
          <option value="Comody" aria-label="Comody" />
          <option value="Romance" aria-label="Romance" />
        </datalist>
        <button type="submit">Add book</button>
      </div>
    </form>
  );
};
export default InserBook;
