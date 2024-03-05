import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <nav className="navigation">
      <NavLink className="link" end to="/">
        Home
      </NavLink>
      <NavLink className="link" to="movie">
        Movie
      </NavLink>
    </nav>
  );
};

export default Header;
