import routes from 'routes';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks';
import { MainBlock, MainTitle, Title, Text } from './HomePage.styled';

const HomePage = () => {
  const { isLoggedIn } = useAuth();
  return (
    <MainBlock>
      <MainTitle>Phonebook</MainTitle>
      <Title>Welcome to Phonebook!</Title>
      {isLoggedIn ? (
        <Text>Thank you for using Phonebook</Text>
      ) : (
        <Text>
          Please <Link to={`${routes.REGISTER}`}>Register</Link> or{' '}
          <Link to={`${routes.LOGIN}`}>Log in</Link> to be able to use your
          PhoneBook.
        </Text>
      )}
    </MainBlock>
  );
};

export default HomePage;
