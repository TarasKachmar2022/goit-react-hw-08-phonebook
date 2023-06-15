import { Outlet } from 'react-router-dom';
import AppBar from 'components/AppBar';
import Footer from 'components/Footer';

const SharedLayout = () => {
  return (
    <>
      <AppBar />
      <hr />
      <Outlet />
      <hr />
      <Footer />
    </>
  );
};

export default SharedLayout;
