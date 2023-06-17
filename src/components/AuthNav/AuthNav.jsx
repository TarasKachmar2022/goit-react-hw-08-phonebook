import routes from 'routes';
import { NavigationContainer, NavLinkWrap, NavLink } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <NavigationContainer>
      <NavLinkWrap>
        <NavLink to={`${routes.REGISTER}`}>Register</NavLink>
      </NavLinkWrap>
      <NavLinkWrap>
        <NavLink to={`${routes.LOGIN}`}>Log In</NavLink>
      </NavLinkWrap>
    </NavigationContainer>
  );
};

export default AuthNav;
