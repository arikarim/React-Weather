import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <div className="navbar d-flex py-3 justify-content-between">
    <h3 className="text-light mx-1">Weather Wide</h3>
    <ul className="navbar-ul mx-md-3">
      <NavLink activeClassName="active" exact className="navbar-li  text-decoration-none mx-1 mx-sm-3" to="/">Home</NavLink>
      <NavLink activeClassName="active" exact className="navbar-li  text-decoration-none mx-1 mx-sm-3" to="/hour">24 Hour</NavLink>
      <NavLink activeClassName="active" exact className="navbar-li  text-decoration-none mx-1 mx-sm-3" to="/about">About</NavLink>
    </ul>
  </div>
);

Nav.propTypes = {

};

export default Nav;