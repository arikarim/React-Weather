import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <div className="navbar d-flex py-3 justify-content-between">
    <h2 className="text-light mx-1">Weather</h2>
    <ul className="navbar-ul mx-2">
      <NavLink activeClassName="active" exact className="navbar-li  text-decoration-none mx-3" to="/">Home</NavLink>
      <NavLink activeClassName="active" exact className="navbar-li  text-decoration-none mx-3" to="/hour">24 Hour</NavLink>
      <NavLink activeClassName="active" exact className="navbar-li  text-decoration-none mx-3" to="/about">About</NavLink>
    </ul>
  </div>
);

Nav.propTypes = {

};

export default Nav;