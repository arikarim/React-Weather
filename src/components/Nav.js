import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div className="d-flex py-3 justify-content-between">
    <h2 className="text-light">Weather</h2>
    <ul>
      <Link exact className="link-danger fw-bolder text-decoration-none mx-4" to="/">Home</Link>

      <Link exact className="link-danger fw-bolder text-decoration-none mx-4" to="/hour">24 Hour</Link>
    </ul>
  </div>
);

Nav.propTypes = {

};

export default Nav;