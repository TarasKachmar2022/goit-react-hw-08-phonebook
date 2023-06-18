import routes from 'routes';
import { RiLoginBoxLine } from 'react-icons/ri';
import { GiArchiveRegister } from 'react-icons/gi';
import {
  NavigationContainer,
  NavLinkWrap,
  NavLink,
  NavLinkText,
} from './AuthNav.styled';

const AuthNav = () => {
  return (
    <NavigationContainer>
      <NavLinkWrap>
        <NavLink to={`${routes.REGISTER}`}>
          <GiArchiveRegister />
          <NavLinkText>Register</NavLinkText>
        </NavLink>
      </NavLinkWrap>
      <NavLinkWrap>
        <NavLink to={`${routes.LOGIN}`}>
          <RiLoginBoxLine /> <NavLinkText> Log In</NavLinkText>
        </NavLink>
      </NavLinkWrap>
    </NavigationContainer>
  );
};

export default AuthNav;
