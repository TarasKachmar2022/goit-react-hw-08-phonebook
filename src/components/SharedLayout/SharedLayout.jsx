import { Outlet } from 'react-router-dom';
import AppBar from 'components/AppBar';

const SharedLayout = () => {
  return (
    <>
      <AppBar />
      <hr />
      <Outlet />
      <hr />
    </>
  );
};

export default SharedLayout;
