import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { logout } from 'redux/auth/auth-operation';
import { userName } from 'redux/auth/auth-selectors';

const UserMenu = () => {
  const name = useSelector(userName);
  const isLogin = useSelector(store => store.auth.isLogin);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  if (!name) {
    return;
  }

  if (!isLogin) {
    return <Navigate to="/register" />;
  }

  return (
    <>
      <p>{name}</p> <button onClick={onLogout}>Log out</button>
    </>
  );
};

export default UserMenu;
