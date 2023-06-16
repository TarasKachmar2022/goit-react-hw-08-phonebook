import { Outlet } from 'react-router-dom';
import { GlobalStyle } from 'styled/globalStyle';
import AppBar from 'components/AppBar';
import Footer from 'components/Footer';
import { Container } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <AppBar />
      <Container>
        <Outlet />
      </Container>
      <Footer />
      <GlobalStyle />
    </>
  );
};

export default SharedLayout;
