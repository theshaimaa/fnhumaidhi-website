import React from 'react';
import { Link } from 'react-router';

const NavLink = (props) => (
   <Link {...props} className="nav-link" activeClassName="active" />
);

export default NavLink;
