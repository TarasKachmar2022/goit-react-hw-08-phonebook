import { useDispatch } from 'react-redux';
import { useAuth } from '../../hooks';
import { logout } from '../../redux/auth/auth-operations';
import defaultAvatar from '../../images/avatar.jpg';
import { Container, Image, Title, LogoutWrap, Logout } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const avatar = defaultAvatar;
  return (
    <Container>
      <div>
        <Image src={avatar} alt="" width="32" />
      </div>
      <Title>Hello, {user} </Title>
      <LogoutWrap>
        <Logout type="button" onClick={() => dispatch(logout())}>
          Log Out
        </Logout>
      </LogoutWrap>
    </Container>
  );
};

export default UserMenu;
