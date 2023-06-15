import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
// import Loader from '../Loader';
import routes from 'routes';
import SharedLayout from 'components/SharedLayout';
import { useAuth } from 'hooks';
import HomePage from 'pages/HomePage';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import ContactsPage from 'pages/ContactsPage/ContactsPage';
import DeveloperPage from 'pages/DeveloperPage/DeveloperPage';
import NotFoundPage from 'pages/NotFoundPage';
import { fetchCurrentUser } from '../../redux/auth/auth-operations';
import { PrivateRoute } from 'components/PrivateRoute';
import { RestrictedRoute } from 'components/RestrictedRoute';

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path={routes.HOME} element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path={routes.REGISTER}
          element={
            <RestrictedRoute
              redirectTo={routes.CONTACTS}
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path={routes.LOGIN}
          element={
            <RestrictedRoute
              redirectTo={routes.CONTACTS}
              component={<LoginPage />}
            />
          }
        />
        <Route
          path={routes.CONTACTS}
          element={
            <PrivateRoute
              redirectTo={routes.LOGIN}
              component={<ContactsPage />}
            />
          }
        />
        <Route path={routes.MOVIES_DEVELOPER} element={<DeveloperPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
