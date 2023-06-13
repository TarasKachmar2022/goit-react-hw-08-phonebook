import { NavLink } from 'react-router-dom';
import routes from 'routes';

const Navigation = () => {
  return (
    <>
      <div>
        <NavLink to={`${routes.HOME}`}>Home</NavLink>
        <NavLink to={`${routes.CONTACTS}`}>Contacts</NavLink>
      </div>
    </>
  );
};

export default Navigation;
