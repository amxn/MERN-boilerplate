import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => (
<div className="container">
  <header>
      <ul className="navbar nav justify-content-center">
        <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
        <li className="nav-item"><Link to="/restaurants" className="nav-link">All Restaurants</Link></li>
      </ul>
    <hr />
  </header>
</div>
);

export default Header;
