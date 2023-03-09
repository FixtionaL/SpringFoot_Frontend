import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link exact to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/players">Players</Link>
        </li>
        {/* <li>
          <Link to="/transfers">Transfers</Link>
        </li> */}
      </ul>
      <Outlet/>
    </nav>
  );
};

export default Navbar;
