import Navigation from 'components/Navigation';
import AuthNav from 'components/AuthNav';
import UserMenu from 'components/UserMenu';
import { AppBarContainer } from './AppBar.styled';

const AppBar = () => {
  return (
    <AppBarContainer>
      <Navigation />
      <AuthNav />
      <UserMenu />
    </AppBarContainer>
  );
};

export default AppBar;
