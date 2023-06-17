import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from '../Loader';
import routes from 'routes';
import SharedLayout from 'components/SharedLayout';
import { fetchCurrentUser } from '../../redux/auth/auth-operations';
import { PrivateRoute } from 'components/PrivateRoute';
import { RestrictedRoute } from 'components/RestrictedRoute';

const HomePage = lazy(() => import('pages/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const DeveloperPage = lazy(() => import('pages/DeveloperPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <Suspense fallback={<Loader />}>
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
    </Suspense>
  );
};

export default App;
