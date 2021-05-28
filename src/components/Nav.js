import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => (
  <div className="navbar d-flex py-3 justify-content-between">
    <h2 className="text-light">Weather</h2>
    <ul className="navbar-ul">
      <NavLink activeClassName="active" exact className="navbar-li  text-decoration-none mx-4" to="/">Home</NavLink>

      <NavLink activeClassName="active" exact className="navbar-li  text-decoration-none mx-4" to="/hour">24 Hour</NavLink>
    </ul>
  </div>
);

Nav.propTypes = {

};

export default Nav;