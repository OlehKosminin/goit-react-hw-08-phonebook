import RegisterForm from 'modules/RegisterForm/RegisterForm';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { isUserLogin } from 'redux/auth/auth-selectors';
import { singup } from 'redux/auth/auth-operation';

import styled from './RegisterPage.module.scss';

const RegisterPage = () => {
  const dispath = useDispatch();
  const login = useSelector(isUserLogin);

  const handleSingup = data => {
    dispath(singup(data));
  };

  if (login) {
    return <Navigate to="/phonebook" />;
  }

  return (
    <div>
      <h1 className={styled.title}>Create account</h1>
      <RegisterForm onSubmit={handleSingup} />
    </div>
  );
};

export default RegisterPage;
