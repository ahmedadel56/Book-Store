import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = ({ book }) => {
  const { id, title, category } = book;
  const dispatch = useDispatch();

  const remove = () => {
    dispatch(removeBook(id));
  };

  const [percentage, setPercntage] = useState(0);
  const [chapter, setCahpter] = useState(0);
  const [author, setAuthor] = useState('');

  const random = (numb) => (Math.floor(Math.random() * numb));

  const percAndChapter = () => {
    setPercntage(random(100));
    setCahpter(random(30));
  };

  const chooseAuthor = () => {
    const authorsList = ['Michael Bennett', 'Aleatha Romig', 'Jerry Weaver', 'Jamie McGuire', 'Aleatha Romig', 'Ade, George', 'Confucius', 'Confucius',
      'Jenna Busch', 'Laurie Finkelstein', 'Konni Granma', 'Laurel Anne Hill', 'Mark J. Rose', 'Barbara Morriss', 'Mike Robinson', 'Naomi Brett Rourke', 'Susan Shofer',
      'Debra Tash', 'Robert Yehling ', 'Konni Granma', 'Laurel Anne Hill', 'Mark J. Rose', 'Barbara Morriss', 'William Faulkner', 'George Orwell', 'Charles Dickens',
      'John Steinbeck', 'Ralph Ellison', 'Harper Lee', 'Franz Kafka'];

    const uthorIndex = random(31);
    const author = authorsList[uthorIndex];
    setAuthor(author);
  };

  useEffect(() => {
    percAndChapter();
    chooseAuthor();
  }, []);

  return (
    <li>
      <h3>
        {title}
        {' '}
        {category}
        {percentage}
        %
        {chapter}
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
    category: '',
  },
};
export default Book;
