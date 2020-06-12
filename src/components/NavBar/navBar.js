/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

const NavBar = (props) => {
  return (
    <div className="nav-flex">
      <div>
        <input id="toggle" type="checkbox" />
        <label className="toggle-container" htmlFor="toggle">
          <span className="button button-toggle" />
        </label>
        <nav className="nav">
          <NavLink className="nav-item" to="/" exact>Home</NavLink>
          <NavLink className="nav-item" to="/about">About</NavLink>
          <NavLink className="nav-item" to="/work">Work Experience</NavLink>
          <NavLink className="nav-item" to="/projects">Projects</NavLink>
          <NavLink className="nav-item" to="/contact">Contact Me</NavLink>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
