import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <nav className="navigation">
      <NavLink className="link" end to="/goit-react-woolf-hw-05-movies">
        Home
      </NavLink>
      <NavLink className="link" to="/goit-react-woolf-hw-05-movies/Movie">
        Movie
      </NavLink>
    </nav>
  );
};

export default Header;
