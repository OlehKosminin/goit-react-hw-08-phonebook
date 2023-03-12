import { NavLink } from 'react-router-dom';

const NavbarAuth = () => {
  return (
    <NavLink to="/register">Register</NavLink> |
    <NavLink to="/login">Login</NavLink>
  );
};

export default NavbarAuth;
