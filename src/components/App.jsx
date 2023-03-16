import Phonebook from './Phonebook/Phonebook';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import NavbarAuth from './NavBar/NavBar';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import AuthProvider from 'modules/AuthProvider/AuthProvider';

import { store, persistor } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthProvider>
          <BrowserRouter basename="/goit-react-hw-08-phonebook">
            <NavbarAuth />
            <Routes>
              <Route path="/" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/phonebook" element={<Phonebook />} />
              <Route path="*" element={<div>Not Found page</div>} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </PersistGate>
    </Provider>
  );
};
