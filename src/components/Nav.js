import React from 'react';
import { NavLink } from 'react-router-dom';
import '../components-style/Nav.css';

export default function Nav() {
  return (
    <div className="panel-bg">
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
      <span>
        
      </span>
    </div>
  );
}
