import routes from 'routes';
import {
  MessageTitle,
  NotFoundContainer,
  BackHomeBtn,
  MainTitle,
  NotFoundTitle,
  DescTitle,
} from './NotFoundPage.styled';

const NotFound = () => {
  return (
    <div>
      <NotFoundContainer>
        <BackHomeBtn to={`${routes.HOME}`}> BACK HOME </BackHomeBtn>
      </NotFoundContainer>
      <hr />
      <MessageTitle>
        <MainTitle>404</MainTitle>
        <NotFoundTitle>Not Found</NotFoundTitle>
        <DescTitle>
          The resource requested could not be found on this server!
        </DescTitle>
      </MessageTitle>
    </div>
  );
};

export default NotFound;
