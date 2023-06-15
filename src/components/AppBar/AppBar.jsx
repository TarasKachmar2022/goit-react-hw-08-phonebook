import Navigation from 'components/Navigation';
import AuthNav from 'components/AuthNav';
import UserMenu from 'components/UserMenu';
import { AppBarContainer } from './AppBar.styled';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selector';

const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <AppBarContainer>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </AppBarContainer>
  );
};

export default AppBar;
