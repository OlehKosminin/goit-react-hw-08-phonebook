import styled from './LoginPage.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { isUserLogin } from 'redux/auth/auth-selectors';
import LoginForm from 'modules/LoginForm/LoginForm';
import { login } from 'redux/auth/auth-operation';

const LoginPage = () => {
  const dispath = useDispatch();
  const isLogin = useSelector(isUserLogin);

  const handleLogin = data => {
    dispath(login(data));
  };

  if (isLogin) {
    return <Navigate to="/phonebook" />;
  }
  return (
    <div>
      <h1 className={styled.title}>Login </h1>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;
