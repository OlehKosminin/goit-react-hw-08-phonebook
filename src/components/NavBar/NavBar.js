import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isUserLogin } from 'redux/auth/auth-selectors';
import UserMenu from 'modules/UserMenu/UserMenu';

const NavbarAuth = () => {
  const isLogin = useSelector(isUserLogin);

  return (
    <div>
      {isLogin ? (
        <UserMenu />
      ) : (
        <div>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/login">Login</NavLink>
        </div>
      )}
    </div>
  );
};

export default NavbarAuth;
