import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaAddressBook } from 'react-icons/fa';
import '../components-style/Nav.css';

export default function Nav() {
  return (
    <header className="panel-bg">
      <nav>
        <span className="Bookstore-CMS ">
          Bookstore CMS
        </span>
        <NavLink to="/" className="NavLink" activeClassName="is-active" exact>
          <span className="BOOKS ">
            BOOKS
          </span>
        </NavLink>
        <NavLink to="/categories" className="NavLink" activeClassName="is-active">
          <span className="CATEGORIES ">
            CATEGORIES
          </span>
        </NavLink>
        <span />
      </nav>
      <span className="icon">
        <FaAddressBook className="fa" />
      </span>
    </header>
  );
}
