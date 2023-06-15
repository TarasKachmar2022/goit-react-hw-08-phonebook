import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import routes from 'routes';
import SharedLayout from 'components/SharedLayout';

import HomePage from 'pages/HomePage';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import ContactsPage from 'pages/ContactsPage/ContactsPage';
import NotFoundPage from 'pages/NotFoundPage';
import { fetchCurrentUser } from '../../redux/auth/auth-operations';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path={routes.HOME} element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path={routes.REGISTER} element={<RegisterPage />} />
          <Route path={routes.LOGIN} element={<LoginPage />} />
          <Route path={routes.CONTACTS} element={<ContactsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
