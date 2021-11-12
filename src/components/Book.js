import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import '../components-style/Book.css';

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
    <li className="book">
      <div className="book-detail">
        <span className="category">
          {category}
        </span>
        <h3>
          {title}
        </h3>
        <span className="author">
          {author}
        </span>
        <ul className="interaction">
          <li>
            Comments
          </li>
          <hr />
          <li>
            <button type="button" onClick={remove}> remove</button>
          </li>
          <hr />
          <li>Edit</li>
        </ul>
      </div>
      <div className="percentage">
        <span className="circle" />
        <div className="calc">
          {percentage}
          %
          <span className="completed">completed</span>
        </div>
      </div>
      <div className="chapter">
        <span className="current-chapter">CURRENT CAHPTER</span>
        <span className="chapter-numb">
          Chapter
          {chapter}
        </span>
        <button type="button" className="update-progress">UPDATE PROGRESS</button>
      </div>
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
