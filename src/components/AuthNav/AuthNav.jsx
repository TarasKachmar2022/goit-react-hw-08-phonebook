import { NavLink } from 'react-router-dom';
import routes from 'routes';

const AuthNav = () => {
  return (
    <div>
      <NavLink to={`${routes.REGISTER}`}>Register</NavLink>
      <NavLink to={`${routes.LOGIN}`}>Login</NavLink>
    </div>
  );
};

export default AuthNav;
