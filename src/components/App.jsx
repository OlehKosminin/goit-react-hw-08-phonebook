import Phonebook from './Phonebook/Phonebook';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import NavbarAuth from './NavBar/NavBar';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import LoginPage from 'pages/LoginPage/LoginPage';

import { store } from 'redux/store';

export const App = () => {
  return (
    <Provider store={store}>
      <NavbarAuth />
      <Routes>
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="phonebook" element={<Phonebook />} />
        <Route path="*" element={<div>Not Found page</div>} />
      </Routes>
    </Provider>
  );
};
// basename="/goit-react-hw-08-phonebook"
