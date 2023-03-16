import { useSelector, useDispatch } from 'react-redux';
import { logout } from 'redux/auth/auth-operation';
import { userName } from 'redux/auth/auth-selectors';

const UserMenu = () => {
  const name = useSelector(userName);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  if (!name) {
    return;
  }

  return (
    <>
      <p>{name}</p> <button onClick={onLogout}>Log out</button>
    </>
  );
};

export default UserMenu;
