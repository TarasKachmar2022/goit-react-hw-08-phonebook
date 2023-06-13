import Navigation from 'components/Navigation';
import AuthNav from 'components/AuthNav';
import UserMenu from 'components/UserMenu';

const AppBar = () => {
  return (
    <>
      <Navigation />
      <AuthNav />
      <UserMenu />
    </>
  );
};

export default AppBar;
