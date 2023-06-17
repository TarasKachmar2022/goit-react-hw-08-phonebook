import routes from 'routes';
import { NavigationContainer, Link } from './Navigation.styled';

const Navigation = () => {
  return (
    <>
      <NavigationContainer>
        <Link to={`${routes.HOME}`}>Home</Link>
        <Link to={`${routes.CONTACTS}`}>Contacts</Link>
      </NavigationContainer>
    </>
  );
};

export default Navigation;
