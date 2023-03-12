import { useSelector } from 'react-redux';
import { userName } from 'redux/auth/auth-selectors';

const UserMenu = () => {
  const name = useSelector(userName);
  if (!name) {
    return;
  }
  return (
    <>
      <p>{name}</p> <button>Log out</button>
    </>
  );
};

export default UserMenu;
